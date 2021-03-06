﻿
/**
Провайдер AnyBalance (http://any-balance-providers.googlecode.com)
*/

var g_headers = {
	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'Accept-Charset': 'windows-1251,utf-8;q=0.7,*;q=0.3',
	'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4',
	'Connection': 'keep-alive',
	'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.76 Safari/537.36',
};

function main() {
	var prefs = AnyBalance.getPreferences();
	var baseurl = 'https://www.flex.ru/';
	AnyBalance.setDefaultCharset('utf-8');

	AB.checkEmpty(prefs.login, 'Введите логин!');
	AB.checkEmpty(prefs.password, 'Введите пароль!');

	var html = AnyBalance.requestGet(baseurl + 'stats/', g_headers);

	if (!html || AnyBalance.getLastStatusCode() > 400) {
		AnyBalance.trace(html);
		throw new AnyBalance.Error('Ошибка при подключении к сайту провайдера! Попробуйте обновить данные позже.');
	}

	html = AnyBalance.requestPost(baseurl + 'stats/?method=auth', {
		login: prefs.login,
		password: prefs.password,
		'act': 'login'
	}, AB.addHeaders({
		Referer: baseurl + 'stats/?method=auth'
	}));

	if (!/Выход/i.test(html)) {
		var error = AB.getParam(html, null, null, /alert\s*\('([\s\S]*?)'\s*\)/i, AB.replaceTagsAndSpaces);
		if (error) {
			throw new AnyBalance.Error(error, null, /парол/i.test(error));
		}
		AnyBalance.trace(html);
		throw new AnyBalance.Error('Не удалось зайти в личный кабинет. Сайт изменен?');
	}

	var result = {
		success: true
	};

	getParam(html, result, 'balance', /Баланс лицевого счета:[^>]*>([^<]*)/i, replaceTagsAndSpaces, parseBalance);
	getParam(html, result, 'userName', /Имя пользователя:[^>]*>([^<]*)/i, replaceTagsAndSpaces);
	getParam(html, result, 'licschet', /Лицевой счет абонента №\s*([^<]*)/i, replaceTagsAndSpaces);

	html = AnyBalance.requestGet(baseurl + 'stats/?method=show&page=traffic');
	if (AnyBalance.isAvailable('__tariff', 'traffic', 'status')) {

	}
	getParam(html, result, '__tariff', /Действующий тарифный план:[^>]*>([^<]*)/i, replaceTagsAndSpaces);
	getParam(html, result, 'traffic', /Зачтенный трафик с начала месяца\s*:[^>]*>([^<]*)/i, replaceTagsAndSpaces,
		parseTrafficGb);
	getParam(html, result, 'status', /Состояние учетной записи:[^>]*>([^<]*)/i, replaceTagsAndSpaces);

	AnyBalance.setResult(result);
}
