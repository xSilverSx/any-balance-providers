﻿/**
Провайдер AnyBalance (http://any-balance-providers.googlecode.com)
*/

var g_headers = {
	'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'Accept-Charset':'windows-1251,utf-8;q=0.7,*;q=0.3',
	'Accept-Language':'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4',
	'Connection':'keep-alive',
	'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31',
	'Host':'stat.vintem.ru'
};

function main(){
    var prefs = AnyBalance.getPreferences();
    var baseurl = 'https://billing.satellite-service.ru/';
    AnyBalance.setDefaultCharset('iso-8859-1'); 

    var html = AnyBalance.requestPost(baseurl + 'cgi-bin/utm5/aaa5', {
        login:prefs.login,
        password:prefs.password,
        cmd:'login'
    }, addHeaders({Referer: baseurl + 'cgi-bin/utm5/aaa5'})); 

    if(!/Выход<\/A>/i.test(html)){
        var error = getParam(html, null, null, /(?:[\s\S]*?<BR[^>]*>){2}([\s\S]*?)<BR>/i, replaceTagsAndSpaces, html_entity_decode);
        if(error)
            throw new AnyBalance.Error(error);
        throw new AnyBalance.Error('Не удалось зайти в личный кабинет. Сайт изменен?');
    }

    var result = {success: true};
    getParam(html, result, 'fio', /<td[^>]*>Полное имя<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i, replaceTagsAndSpaces, html_entity_decode);
    getParam(html, result, 'account', /<td[^>]*>Основной счет<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i, replaceTagsAndSpaces, html_entity_decode);
    getParam(html, result, 'id', /<td[^>]*>ID<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i, replaceTagsAndSpaces, parseBalance);
    getParam(html, result, 'balance', /<td[^>]*>Баланс основного счета<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i, replaceTagsAndSpaces, parseBalance);
    getParam(html, result, 'balanceCredit', /<td[^>]*>Кредит основного счета<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i, replaceTagsAndSpaces, parseBalance);
    getParam(html, result, 'nds', /<td[^>]*>Ставка НДС, %<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i, replaceTagsAndSpaces, parseBalance);
    getParam(html, result, 'block', /<td[^>]*>Блокировка<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i, replaceTagsAndSpaces, html_entity_decode);

    var href = getParam(html, null, null, /<SPAN[^>]+class="submenu-inact"[^>]*><A[^>]+href=\"([\s\S]*?)\"[^>]*>Список услуг<\/A>/i, replaceTagsAndSpaces, html_entity_decode);

    html = AnyBalance.requestGet(baseurl + "cgi-bin/utm5/" + href, g_headers);

    getParam(html, result, '__tariff', /<TD[^>]*>Тарифный план<\/TD>(?:[\s\S]*?<td[^>]*>){7}([\s\S]*?)<\/td>/i, replaceTagsAndSpaces, html_entity_decode);    

    AnyBalance.setResult(result);
}
