﻿/**
Провайдер AnyBalance (http://any-balance-providers.googlecode.com)
*/

var g_headers = {
	'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'Accept-Charset':'windows-1251,utf-8;q=0.7,*;q=0.3',
	'Accept-Language':'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4',
	'Connection':'keep-alive',
	'User-Agent':'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11+'
};

function main(){
    var prefs = AnyBalance.getPreferences();
    var baseurl = "http://act.telekarta.tv/chkcard/";

    AnyBalance.setDefaultCharset('utf-8'); 

    var html = AnyBalance.requestPost(baseurl + 'check.php', {
        card: prefs.login
    }, addHeaders({Referer: baseurl + 'index.php'}));
	
	var msg = getElement(html, /<div[^>]+id="msg"[^>]*>/i);
	var elements = getElements(msg, /<table[^>]+sublist_table[^>]*>/ig);
	if (elements.length == 0) {
		if (msg)
			throw new AnyBalance.Error(replaceAll(msg, replaceTagsAndSpaces), null, /Ошибка в номере карты/i.test(msg));
		
		AnyBalance.trace(html);
		throw new AnyBalance.Error('Не удалось получить дату окончания подписки. Сайт изменен?');
	}
	
    var result = {success: true};
    
    getParam(msg, result, 'num', /^([\s\S]*?):/i,  replaceTagsAndSpaces);
    getParam(elements[elements.length-1], result, '__tariff', /<th[^>]*>\s*Наименование(?:[\s\S]*?<td[^>]*>){1}([\s\S]*?)<\/td>/i,  replaceTagsAndSpaces);
    getParam(elements[elements.length-1], result, 'status', /<th[^>]*>\s*Статус(?:[\s\S]*?<td[^>]*>){2}([\s\S]*?)<\/td>/i, replaceTagsAndSpaces);
    getParam(elements[elements.length-1], result, 'till', /<th[^>]*>\s*Статус(?:[\s\S]*?<td[^>]*>){2}[^<]* по([\s\S]*?)<\/td>/i,  replaceTagsAndSpaces, parseDateWord);

    AnyBalance.setResult(result);
}
