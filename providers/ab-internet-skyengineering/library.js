/*
 AnyBalance Library (https://github.com/dukei/any-balance-providers/)
 The uncompressed full source code of this library is here: https://github.com/dukei/any-balance-providers/blob/master/extra/development/ab-test-library/library.js
*/
var XRegExp=function(l){function t(a,b,d,c,e){var g;a.xregexp={captureNames:b};if(e)return a;if(a.__proto__)a.__proto__=h.prototype;else for(g in h.prototype)a[g]=h.prototype[g];a.xregexp.source=d;a.xregexp.flags=c?c.split("").sort().join(""):c;return a}function w(a){return m.replace.call(a,/([\s\S])(?=[\s\S]*\1)/g,"")}function y(a,b){if(!h.isRegExp(a))throw new TypeError("Type RegExp expected");var d=a.xregexp||{},c=O?a.flags:m.exec.call(/\/([a-z]*)$/i,RegExp.prototype.toString.call(a))[1],e="",
g="",f=null,k=null;b=b||{};b.removeG&&(g+="g");b.removeY&&(g+="y");g&&(c=m.replace.call(c,new RegExp("["+g+"]+","g"),""));b.addG&&(e+="g");b.addY&&(e+="y");e&&(c=w(c+e));b.isInternalOnly||(d.source!==l&&(f=d.source),null!=d.flags&&(k=e?w(d.flags+e):d.flags));return a=t(new RegExp(a.source,c),a.xregexp&&a.xregexp.captureNames?d.captureNames.slice(0):null,f,k,b.isInternalOnly)}function p(a,b){var d=a.length,c;for(c=0;c<d;++c)if(a[c]===b)return c;return-1}function x(a,b){return E.call(a)==="[object "+
b+"]"}function r(a,b,d){return m.test.call(-1<d.indexOf("x")?/^(?:\s+|#.*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/:/^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,a.slice(b))}function F(a,b){var d;if(w(b)!==b)throw new SyntaxError("Invalid duplicate regex flag "+b);a=m.replace.call(a,/^\(\?([\w$]+)\)/,function(d,a){if(m.test.call(/[gy]/,a))throw new SyntaxError("Cannot use flag g or y in mode modifier "+d);b=w(b+a);return""});for(d=0;d<b.length;++d)if(!L[b.charAt(d)])throw new SyntaxError("Unknown regex flag "+
b.charAt(d));return{pattern:a,flags:b}}function M(a){var b={};return x(a,"String")?(h.forEach(a,/[^\s,]+/,function(d){b[d]=!0}),b):a}function G(a){if(!/^[\w$]$/.test(a))throw Error("Flag must be a single character A-Za-z0-9_$");L[a]=!0}function H(a){RegExp.prototype.exec=(a?u:m).exec;RegExp.prototype.test=(a?u:m).test;String.prototype.match=(a?u:m).match;String.prototype.replace=(a?u:m).replace;String.prototype.split=(a?u:m).split;q.natives=a}function A(a){if(null==a)throw new TypeError("Cannot convert null or undefined to object");
return a}var h,q={astral:!1,natives:!1},m={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},u={},B={},z={},C=[],P={"default":/\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,"class":/\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/},N=/\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,
I=m.exec.call(/()??/,"")[1]===l,J=function(){var a=!0;try{RegExp("","u")}catch(b){a=!1}return a}(),K=function(){var a=!0;try{RegExp("","y")}catch(b){a=!1}return a}(),O=/a/.flags!==l,L={g:!0,i:!0,m:!0,u:J,y:K},E={}.toString,v;h=function(a,b){var d={hasNamedCapture:!1,captureNames:[]},c="default",e="",g=0,f,k,D;if(h.isRegExp(a)){if(b!==l)throw new TypeError("Cannot supply flags when copying a RegExp");return y(a)}a=a===l?"":String(a);b=b===l?"":String(b);h.isInstalled("astral")&&-1===b.indexOf("A")&&
(b+="A");z[a]||(z[a]={});if(!z[a][b]){f=F(a,b);k=f.pattern;for(D=f.flags;g<k.length;){do{f=k;for(var n=D,Q=g,p=c,r=d,x=C.length,u=f.charAt(Q),v=null,w=void 0,q=void 0;x--;)if(q=C[x],!(q.leadChar&&q.leadChar!==u||q.scope!==p&&"all"!==q.scope||q.flag&&-1===n.indexOf(q.flag))&&(w=h.exec(f,q.regex,Q,"sticky"))){v={matchLength:w[0].length,output:q.handler.call(r,w,p,n),reparse:q.reparse};break}(f=v)&&f.reparse&&(k=k.slice(0,g)+f.output+k.slice(g+f.matchLength))}while(f&&f.reparse);f?(e+=f.output,g+=f.matchLength||
1):(f=h.exec(k,P[c],g,"sticky")[0],e+=f,g+=f.length,"["===f&&"default"===c?c="class":"]"===f&&"class"===c&&(c="default"))}z[a][b]={pattern:m.replace.call(e,/\(\?:\)(?=\(\?:\))|^\(\?:\)|\(\?:\)$/g,""),flags:m.replace.call(D,/[^gimuy]+/g,""),captures:d.hasNamedCapture?d.captureNames:null}}d=z[a][b];return t(new RegExp(d.pattern,d.flags),d.captures,a,b)};h.prototype=RegExp();h.version="3.0.0";h.addToken=function(a,b,d){d=d||{};var c=d.optionalFlags,e;d.flag&&G(d.flag);if(c)for(c=m.split.call(c,""),e=
0;e<c.length;++e)G(c[e]);C.push({regex:y(a,{addG:!0,addY:K,isInternalOnly:!0}),handler:b,scope:d.scope||"default",flag:d.flag,reparse:d.reparse,leadChar:d.leadChar});h.cache.flush("patterns")};h.cache=function(a,b){B[a]||(B[a]={});return B[a][b]||(B[a][b]=h(a,b))};h.cache.flush=function(a){"patterns"===a?z={}:B={}};h.escape=function(a){return m.replace.call(A(a),/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};h.exec=function(a,b,d,c){var e="g",g=!1;(g=K&&!!(c||b.sticky&&!1!==c))&&(e+="y");b.xregexp=b.xregexp||
{};e=b.xregexp[e]||(b.xregexp[e]=y(b,{addG:!0,addY:g,removeY:!1===c,isInternalOnly:!0}));e.lastIndex=d=d||0;a=u.exec.call(e,a);c&&a&&a.index!==d&&(a=null);b.global&&(b.lastIndex=a?e.lastIndex:0);return a};h.forEach=function(a,b,d){for(var c=0,e=-1;c=h.exec(a,b,c);)d(c,++e,a,b),c=c.index+(c[0].length||1)};h.globalize=function(a){return y(a,{addG:!0})};h.install=function(a){a=M(a);!q.astral&&a.astral&&(q.astral=!0);!q.natives&&a.natives&&H(!0)};h.isInstalled=function(a){return!!q[a]};h.isRegExp=function(a){return"[object RegExp]"===
E.call(a)};h.match=function(a,b,d){var c=b.global&&"one"!==d||"all"===d,e=(c?"g":"")+(b.sticky?"y":"")||"noGY";b.xregexp=b.xregexp||{};e=b.xregexp[e]||(b.xregexp[e]=y(b,{addG:!!c,addY:!!b.sticky,removeG:"one"===d,isInternalOnly:!0}));a=m.match.call(A(a),e);b.global&&(b.lastIndex="one"===d&&a?a.index+a[0].length:0);return c?a||[]:a&&a[0]};h.matchChain=function(a,b){return function c(a,g){var f=b[g].regex?b[g]:{regex:b[g]},k=[],D=function(b){if(f.backref){if(!(b.hasOwnProperty(f.backref)||+f.backref<
b.length))throw new ReferenceError("Backreference to undefined group: "+f.backref);k.push(b[f.backref]||"")}else k.push(b[0])},n;for(n=0;n<a.length;++n)h.forEach(a[n],f.regex,D);return g!==b.length-1&&k.length?c(k,g+1):k}([a],0)};h.replace=function(a,b,d,c){var e=h.isRegExp(b),g=b.global&&"one"!==c||"all"===c,f=(g?"g":"")+(b.sticky?"y":"")||"noGY",k=b;e?(b.xregexp=b.xregexp||{},k=b.xregexp[f]||(b.xregexp[f]=y(b,{addG:!!g,addY:!!b.sticky,removeG:"one"===c,isInternalOnly:!0}))):g&&(k=new RegExp(h.escape(String(b)),
"g"));a=u.replace.call(A(a),k,d);e&&b.global&&(b.lastIndex=0);return a};h.replaceEach=function(a,b){var d,c;for(d=0;d<b.length;++d)c=b[d],a=h.replace(a,c[0],c[1],c[2]);return a};h.split=function(a,b,d){return u.split.call(A(a),b,d)};h.test=function(a,b,d,c){return!!h.exec(a,b,d,c)};h.uninstall=function(a){a=M(a);q.astral&&a.astral&&(q.astral=!1);q.natives&&a.natives&&H(!1)};h.union=function(a,b){var d=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,c=[],e=0,g,f,k,D=function(b,d,c){var a=
f[e-g];if(d){if(++e,a)return"(?<"+a+">"}else if(c)return"\\"+(+c+g);return b},n;if(!x(a,"Array")||!a.length)throw new TypeError("Must provide a nonempty array of patterns to merge");for(n=0;n<a.length;++n)k=a[n],h.isRegExp(k)?(g=e,f=k.xregexp&&k.xregexp.captureNames||[],c.push(m.replace.call(h(k.source).source,d,D))):c.push(h.escape(k));return h(c.join("|"),b)};u.exec=function(a){var b=this.lastIndex,d=m.exec.apply(this,arguments),c,e;if(d){!I&&1<d.length&&-1<p(d,"")&&(c=y(this,{removeG:!0,isInternalOnly:!0}),
m.replace.call(String(a).slice(d.index),c,function(){var b=arguments.length,c;for(c=1;c<b-2;++c)arguments[c]===l&&(d[c]=l)}));if(this.xregexp&&this.xregexp.captureNames)for(e=1;e<d.length;++e)(c=this.xregexp.captureNames[e-1])&&(d[c]=d[e]);this.global&&!d[0].length&&this.lastIndex>d.index&&(this.lastIndex=d.index)}this.global||(this.lastIndex=b);return d};u.test=function(a){return!!u.exec.call(this,a)};u.match=function(a){var b;if(!h.isRegExp(a))a=new RegExp(a);else if(a.global)return b=m.match.apply(this,
arguments),a.lastIndex=0,b;return u.exec.call(a,A(this))};u.replace=function(a,b){var d=h.isRegExp(a),c,e,g;d?(a.xregexp&&(e=a.xregexp.captureNames),c=a.lastIndex):a+="";g=x(b,"Function")?m.replace.call(String(this),a,function(){var c=arguments,g;if(e)for(c[0]=new String(c[0]),g=0;g<e.length;++g)e[g]&&(c[0][e[g]]=c[g+1]);d&&a.global&&(a.lastIndex=c[c.length-2]+c[0].length);return b.apply(l,c)}):m.replace.call(null==this?this:String(this),a,function(){var d=arguments;return m.replace.call(String(b),
N,function(b,c,a){if(c){a=+c;if(a<=d.length-3)return d[a]||"";a=e?p(e,c):-1;if(0>a)throw new SyntaxError("Backreference to undefined group "+b);return d[a+1]||""}if("$"===a)return"$";if("&"===a||0===+a)return d[0];if("`"===a)return d[d.length-1].slice(0,d[d.length-2]);if("'"===a)return d[d.length-1].slice(d[d.length-2]+d[0].length);a=+a;if(!isNaN(a)){if(a>d.length-3)throw new SyntaxError("Backreference to undefined group "+b);return d[a]||""}throw new SyntaxError("Invalid token "+b);})});d&&(a.lastIndex=
a.global?0:c);return g};u.split=function(a,b){if(!h.isRegExp(a))return m.split.apply(this,arguments);var d=String(this),c=[],e=a.lastIndex,g=0,f;b=(b===l?-1:b)>>>0;h.forEach(d,a,function(b){b.index+b[0].length>g&&(c.push(d.slice(g,b.index)),1<b.length&&b.index<d.length&&Array.prototype.push.apply(c,b.slice(1)),f=b[0].length,g=b.index+f)});g===d.length?m.test.call(a,"")&&!f||c.push(""):c.push(d.slice(g));a.lastIndex=e;return c.length>b?c.slice(0,b):c};v=h.addToken;v(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
function(a,b){if("B"===a[1]&&"default"===b)return a[0];throw new SyntaxError("Invalid escape "+a[0]);},{scope:"all",leadChar:"\\"});v(/\\u{([\dA-Fa-f]+)}/,function(a,b,d){b=parseInt(a[1],16);if(1114111<b)throw new SyntaxError("Invalid Unicode code point "+a[0]);if(65535>=b){for(a=parseInt(b,10).toString(16);4>a.length;)a="0"+a;return"\\u"+a}if(J&&-1<d.indexOf("u"))return a[0];throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");},{scope:"all",leadChar:"\\"});v(/\[(\^?)]/,
function(a){return a[1]?"[\\s\\S]":"\\b\\B"},{leadChar:"["});v(/\(\?#[^)]*\)/,function(a,b,d){return r(a.input,a.index+a[0].length,d)?"":"(?:)"},{leadChar:"("});v(/\s+|#.*/,function(a,b,d){return r(a.input,a.index+a[0].length,d)?"":"(?:)"},{flag:"x"});v(/\./,function(){return"[\\s\\S]"},{flag:"s",leadChar:"."});v(/\\k<([\w$]+)>/,function(a){var b=isNaN(a[1])?p(this.captureNames,a[1])+1:+a[1],d=a.index+a[0].length;if(!b||b>this.captureNames.length)throw new SyntaxError("Backreference to undefined group "+
a[0]);return"\\"+b+(d===a.input.length||isNaN(a.input.charAt(d))?"":"(?:)")},{leadChar:"\\"});v(/\\(\d+)/,function(a,b){if(!("default"===b&&/^[1-9]/.test(a[1])&&+a[1]<=this.captureNames.length)&&"0"!==a[1])throw new SyntaxError("Cannot use octal escape or backreference to undefined group "+a[0]);return a[0]},{scope:"all",leadChar:"\\"});v(/\(\?P?<([\w$]+)>/,function(a){if(!isNaN(a[1]))throw new SyntaxError("Cannot use integer as capture name "+a[0]);if("length"===a[1]||"__proto__"===a[1])throw new SyntaxError("Cannot use reserved word as capture name "+
a[0]);if(-1<p(this.captureNames,a[1]))throw new SyntaxError("Cannot use same name for multiple groups "+a[0]);this.captureNames.push(a[1]);this.hasNamedCapture=!0;return"("},{leadChar:"("});v(/\((?!\?)/,function(a,b,d){if(-1<d.indexOf("n"))return"(?:";this.captureNames.push(null);return"("},{optionalFlags:"n",leadChar:"("});return h}();
(function(){String.prototype.replaceAll=function(p){var r=this,l;for(l=0;p&&l<p.length;++l)isArray(p[l])?r=r.replaceAll(p[l]):(r=r.replace(p[l],p[l+1]),++l);return r.valueOf()};var l={quot:34,amp:38,lt:60,gt:62,apos:39,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,
frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,
iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,
delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,
frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,
sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},t=[new XRegExp("&(\t[a-zA-Z][a-zA-Z\\d]+\t\t\n\r\n\t\t|\t\\# (?:\t\\d{1,5}\t\t\t\n\r\n\t\t\t\t|\tx[\\da-fA-F]{2,4}\t\n\r\n\t\t\t\t)\t\t\t\t\t\t\n\r\n\t\t)\t\t\t\t\t\t\t#1  \n\r\n\t\t;","gx"),function(p,r){return"#"!==r[0]?l.hasOwnProperty(r)?String.fromCharCode(l[r]):"&"+r+";":String.fromCharCode("x"===r[1]?parseInt(r.substr(2),
16):parseInt(r.substr(1),10))}];String.REPLACE_HTML_ENTITIES=t;String.HTML_ENTITY_TABLE=l;String.prototype.htmlEntityDecode=function(){return this.replaceAll(t)};var w=/(?:[^>"']+|"[^"]*"|'[^']*')*/.source,y=/^<(address|blockquote|caption|center|dd|div|dl|dt|h[1-6]|hr|li|menu|ol|p|pre|table|tbody|td|tfoot|th|thead|tr|ul|article|aside|audio|canvas|figcaption|figure|footer|header|hgroup|output|progress|section|video|form|title|br)\b/i,p=String.REPLACE_TAGS_AND_SPACES=[new XRegExp("(?:\n\t\t\t#pair tags with content:\n\t\t\t<\t(?=[a-z])\t#speed improve optimization\n\t\t\t\t(script|style|map|iframe|frameset|object|applet|comment|button|textarea|select)\\b\t#1"+
w+">\n\t\t\t\t.*?\n\t\t\t< (?!script\\b)\n\t\t\t\t#speed improve optimization - atomic group\n\t\t\t\t(?=(/?))\\2\t\t\t\t\t\t\t\t\t#2\n\t\t\t\t\\1"+w+">\n\n\t\t\t#opened tags:\n\t\t|\t<\t(?=[a-z])\n\t\t\t\t(?!(?:script|style|map|iframe|frameset|object|applet|comment|button|textarea|select)\\b)"+w+">\n\n\t\t|\t</[a-z]"+w+">\t#closed tags\n\t\t|\t<![a-z]"+w+">\t#<!DOCTYPE ...>\n\t\t|\t<!\\[CDATA\\[  .*?  \\]\\]>\t\t#CDATA\n\t\t|\t\x3c!--  .*?   --\x3e\t\t\t\t\t#comments\n\t\t|\t<\\?  .*?  \\?>\t\t\t\t\t#instructions part1 (PHP, Perl, ASP)\n\t\t|\t<%\t  .*?    %>\t\t\t\t\t#instructions part2 (PHP, Perl, ASP)\n\t\t)",
"igx"),function(p,l){return-1<p.search(y)?"\n":""},t,/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"",/\r/g,"\n",/\x20\x20+/g," ",/\n\x20/g,"\n",/\x20\n/g,"\n",/\n\n\n+/g,"\n\n"];String.prototype.htmlToText=function(){return this.replaceAll(p)}})();
var AB=function(l){function t(b,d,c,a,g,f){if(p(b)){if(y(c)){for(var k=x(a)?a:[a],h=0;h<k.length;++h){a=(a=k[h])?b.match(a):[,b];var n;if(a){n=r(p(a[1])?a[1]:a[0],g);f&&(n=f(n));c&&p(n)&&(d[w(c)]=n);break}}return n}AnyBalance.trace(c+" is disabled!")}else AnyBalance.trace("getParam: input "+(c?"("+c+")":"")+" is unset! "+Error().stack)}function w(b){return(b=x(b)?b[0]:b)&&b.substr(b.lastIndexOf(".")+1)}function y(b){return!b||/\b__/.test(b.toString())?!0:AnyBalance.isAvailable(b)}function p(b){return"undefined"!=
typeof b}function x(b){return"[object Array]"===Object.prototype.toString.call(b)}function r(b,d){if(!d)return b;"string"!=typeof b&&(b+="");return b.replaceAll(d)}function F(b,d){var a=t(b.replace(/\s+/g,""),null,null,/(-?[.,]?\d[\d'.,]*)/,v,parseFloat);d||AnyBalance.trace("Parsing balance ("+a+") from: "+b);return a}function M(b,d){var a=b.replace(/[\s�]+/g,""),e=0,g=0,f=0;/^\d+:\d+:\d+$/i.test(a)?(a=/^(\d+):(\d+):(\d+)$/i.exec(a),e=parseFloat(a[1]),g=parseFloat(a[2]),f=parseFloat(a[3])):/^\d+:\d+/i.test(a)?
(a=/^(\d+):(\d+)/i.exec(a),e=0,g=parseFloat(a[1]),f=parseFloat(a[2])):(e=t(a,null,null,/(-?\d[\d.,]*)\s*(?:час|ч|hour|h)/i,v,parseFloat)||0,g=t(a,null,null,[/(-?\d[\d.,]*)\s*(?:мин|м|хв|min|m)/i,/^-?[\d.,]+$/i],v,parseFloat)||0,f=t(a,null,null,/(-?\d[\d.,]*)\s*(?:сек|c|с|sec|s)/i,v,parseFloat)||0);e=3600*e+60*g+f;d||AnyBalance.trace("Parsed seconds ("+e+") from: "+b);return e}function G(b,d){var a=/(?:(\d+)[^\d])?(\d+)[^\d](\d{2,4})(?:[^\d](\d+):(\d+)(?::(\d+))?)?/.exec(b);if(a){var e=+a[3],a=new Date(1E3>
e?2E3+e:e,a[2]-1,+(a[1]||1),a[4]||0,a[5]||0,a[6]||0),e=a.getTime();d||AnyBalance.trace("Parsing date "+a+" from value: "+b);return e}d||AnyBalance.trace("Failed to parse date from value: "+b)}function H(b,a){var c={},e;for(e in a)c[e]=a[e];if(b)for(e in b)c[e]=b[e];return c}function A(b,a){var c=b.slice();c.push.apply(c,a);return c}function h(b){try{return q("return "+b,"window,document,self")}catch(a){throw AnyBalance.trace("Bad json ("+a.message+"): "+b),new AnyBalance.Error("Сервер вернул ошибочные данные: "+
a.message);}}function q(b,a,c){var e=AnyBalance,g=l.g_AnyBalanceApiParams,f=l._AnyBalanceApi;l.AnyBalance=l.g_AnyBalanceApiParams=l._AnyBalanceApi=void 0;try{return Function(a||"ja0w4yhwphgawht984h","AnyBalance","g_AnyBalanceApiParams","_AnyBalanceApi",b).apply(null,c)}catch(k){throw new e.Error("Bad javascript ("+k.message+"): "+b);}finally{AnyBalance=e,l.g_AnyBalanceApiParams=g,l._AnyBalanceApi=f}}function m(b,a){return-1!==b.indexOf(a,b.length-a.length)}function u(b,a,c,e,g,f,k,h){function n(b){b=
r(b,g);f&&(b=f(b));p(b)&&m.push(b)}if(p(b)){if("function"==typeof k){var l=h;h=k;k=l||!1}if(!y(c))return AnyBalance.trace(c+" is disabled!"),b=k?e?b.replace(e,""):"":void 0,b;c=w(c);var m=[];c&&p(a[c])&&m.push(a[c]);for(var t=x(e)?e:[e],q=0;q<t.length;++q){if(e=t[q])for(e.lastIndex=0;(l=e.exec(b))&&(n(p(l[1])?l[1]:l[0]),e.global););else n(b);k&&(b=e?b.replace(e,""):"")}var u;h?u=h(m):c||(u=m);return c?(p(u)&&(a[c]=u),b):u}AnyBalance.trace("sumParam: input "+(c?"("+c+")":"")+" is unset! "+Error().stack)}
function B(b){if(0!=b.length){for(var a=0,c=0;c<b.length;++c)a+=b[c];return a}}function z(b,a,c){if(0!=b.length)return p(a)||(a=", "),b=b.join(a),c||(a=a.trim().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),b=b.replace(new RegExp("^(?:\\s*"+a+"\\s*)+|(?:\\s*"+a+"]\\s*){2,}|(?:\\s*"+a+"\\s*)+$","g"),"")),b}function C(b,a,c,e){var g=b.replace(/\s+/g,""),f=t(g,null,null,/(-?\.?\d[\d\.,]*)/,v,parseFloat);if(p(f)&&""!==f){if((g=t(g,null,null,/([kmgtкмгт][бb]?|[бb](?![\wа-я])|байт|bytes)/i))||e){g||(g=e);switch(g.substr(0,
1).toLowerCase()){case "b":case "б":f=Math.round(f/Math.pow(a,c)*100)/100;break;case "k":case "к":f=Math.round(f/Math.pow(a,c-1)*100)/100;break;case "m":case "м":f=Math.round(f/Math.pow(a,c-2)*100)/100;break;case "g":case "г":f=Math.round(f/Math.pow(a,c-3)*100)/100;break;case "t":case "т":f=Math.round(f/Math.pow(a,c-4)*100)/100}a=""+f;6<a.length?f=Math.round(f):5<a.length&&(f=Math.round(10*f)/10);AnyBalance.trace("Parsing traffic ("+f+{0:"b",1:"kb",2:"mb",3:"gb",4:"tb"}[c]+") from: "+b);return f}AnyBalance.trace("Could not parse traffic units from "+
b)}else AnyBalance.trace("Could not parse traffic value from "+b)}function P(b,a,c,e){var g=a.exec(b);if(g){var f=g.index,g=b.substr(f,g[0].length),k=t(g,null,null,/<(\w+)/),g=new RegExp("<"+k+"[^>]*>","ig"),k=new RegExp("</"+k+"[^>]*>","ig");g.lastIndex=f;k=N(b,g,k,c,e);a.lastIndex=g.lastIndex;return k}}function N(b,a,c,e,g){var f=a.exec(b);if(f){var k=f.index,h=0,n=new RegExp("(?:"+a.source+")|(?:"+c.source+")","ig");c=new RegExp("^(?:"+c.source+")",c.ignoreCase?"i":"");for(n.lastIndex=k+f[0].length;;){f=
n.exec(b);if(!f)break;var l=f[0];if(c.test(l)){if(0==h)break;--h}else++h;n.lastIndex=f.index+l.length}h=b.length;f&&(h=f.index+f[0].length);a.lastIndex=h;b=b.substring(k,h);e&&(b=r(b,e));g&&(b=g(b));return b}}function I(b,a,c,e){var g=[],f=x(a)?a[0]:a;a=x(a)?(a.shift(),a):null;do{var k=P(b,f,c,e),h=k&&!a;if(a&&k)for(var n=0;n<a.length&&!(h=h||a[n].test(k));++n);h&&g.push(k);if(!f.global)break}while(p(k));return g}function J(b){return 10>b?"0"+b:""+b}function K(b,a){a||(a=new Date);"string"==typeof b&&
(b={format:b});a=new Date(a.getFullYear()-(b.offsetYear||0),a.getMonth()-(b.offsetMonth||0),a.getDate()-(b.offsetDay||0));var c=a.getDate(),e=a.getMonth()+1,g=a.getFullYear();return r(b.format,[/DD/,J(c),/D/,c,/MM/,J(e),/M/,e,/YYYY/,g,/YY/,(g+"").substring(2,4)])}function O(b,a){for(var c={},e=0;e<a.length;e++){var g=a[e],f;for(f in b)b[f].re.test(g)&&(c[f]=e)}return c}function L(b,a,c,e,g){function f(b,a){return p(b)?b:a}g=g||"";var k=E,h;for(h in b){var n=b[h];if(p(a[h])){var l=c[a[h]],m=f(n.result_name,
h);if(x(m)){for(var r=[],q=0;q<m.length;q++)r.push(g+m[q]);m=r}else m=g+m;n.result_process?n.result_process(g,l,e):n.result_sum?(n.result_re&&(n.result_re.lastIndex=0),u(l,e,m,n.result_re,f(n.result_replace,k),f(n.result_func,F),f(n.result_aggregate,B))):t(l,e,m,n.result_re,f(n.result_replace,k),f(n.result_func,F))}}}var E=[String.REPLACE_TAGS_AND_SPACES,/[\uFEFF\xA0]/ig," ",/\s{2,}/g," ",/^\s+|\s+$/g,""],v=[/[\u2212\u2013\u2014]/ig,"-",/\s+/g,"",/'/g,"",/,/g,".",/\.([^.]*)(?=\.)/g,"$1",/^\./,"0."],
a=String.REPLACE_HTML_ENTITIES;(function(b,a){var c=b.parse,e=[1,4,5,6,7,10,11];b.parse=function(g){var f,k=0;if(f=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:(?:T|\s+)(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3})\d*)?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(g)){g=0;for(var h;h=e[g];++g)f[h]=+f[h]||0;f[2]=(+f[2]||1)-1;f[3]=+f[3]||1;"Z"!==f[8]&&f[9]!==a&&(k=60*f[10]+f[11],"+"===f[9]&&(k=0-k));f=b.UTC(f[1],f[2],f[3],f[4],f[5]+k,f[6],f[7]);b.lastParse="custom"}else f=c?c(g):NaN,b.lastParse="original";
return f}})(Date);return{getParam:t,checkEmpty:function(b,a,c){if(!b)throw new AnyBalance.Error(a,null,!c);},isAvailable:y,replaceTagsAndSpaces:E,replaceSlashes:[/\\(.?)/g,function(b,a){switch(a){case "0":return"\x00";case "":return"";default:return a}}],replaceHtmlEntities:a,isset:p,isArray:x,replaceAll:r,parseBalance:F,parseBalanceSilent:function(b){return F(b,!0)},parseCurrency:function(b){var a=t(b.replace(/\s+/g,""),null,null,/-?\d[\d.,]*(\S*)/);AnyBalance.trace("Parsing currency ("+a+") from: "+
b);return a},parseMinutes:M,parseMinutesSilent:function(b){return M(b,!0)},html_entity_decode:function(b){return b.htmlEntityDecode()},createFormParams:function(b,d,c){for(var e=c?[]:{},g=/value\s*=\s*("[^"]*"|'[^']*'|[\w\-\/\\]+)/i,f=[/^"([^"]*)"$|^'([^']*)'$/,"$1$2",a],h,l=/<input[^>]+name\s*=\s*("[^"]*"|'[^']*'|[\w\-\/\\]+)[^>]*>|<select[^>]+name\s*=\s*("[^"]*"|'[^']*'|[\w\-\/\\]+)[^>]*>[\s\S]*?<\/select>/ig;;){var n=l.exec(b);if(!n)break;var m=n[0],p=n[1],n=n[2],q="";p?(q=/type\s*=\s*['"]?button['"]?/i.test(m)?
void 0:/type\s*=\s*['"]?checkbox['"]?/i.test(m)?/[^\w\-]checked[^\w\-]/i.test(m)?t(m,null,null,g,f)||"on":void 0:t(m,null,null,g,f)||"",h=r(p,f)):n&&(h=t(m,null,null,/^<[^>]*>/i),q=t(h,null,null,g,f),"undefined"==typeof q&&((h=t(m,null,null,/(<option[^>]+selected[^>]*>)/i))||(h=t(m,null,null,/(<option[^>]*>)/i)),h&&(q=t(h,null,null,g,f))),h=r(n,f));d&&(q=d(e,m,h,q));"undefined"!=typeof q&&(c?e.push([h,q]):e[h]=q)}return e},parseDate:G,parseDateSilent:function(b){return G(b,!0)},parseDateWord:function(b){AnyBalance.trace("Trying to parse date from "+
b);b=r(b,[E,a,/\D*(?:январ(?:я|ь)|янв|january|jan)\D*/i,".01.",/\D*(?:феврал(?:я|ь)|фев|febrary|feb)\D*/i,".02.",/\D*(?:марта|март|мар|march|mar)\D*/i,".03.",/\D*(?:апрел(?:я|ь)|апр|april|apr)\D*/i,".04.",/\D*(?:ма(?:я|й)|may)\D*/i,".05.",/\D*(?:июн(?:я|ь)|июн|june|jun)\D*/i,".06.",/\D*(?:июл(?:я|ь)|июл|july|jul)\D*/i,".07.",/\D*(?:августа|август|авг|august|aug)\D*/i,".08.",/\D*(?:сентябр(?:я|ь)|сен|september|sep)\D*/i,".09.",/\D*(?:октябр(?:я|ь)|окт|october|oct)\D*/i,".10.",/\D*(?:ноябр(?:я|ь)|ноя|november|nov)\D*/i,
".11.",/\D*(?:декабр(?:я|ь)|dec|december|dec)\D*/i,".12.",/\s/g,""]);m(b,".")&&(b+=(new Date).getFullYear());return G(b)},joinObjects:H,joinArrays:A,addHeaders:function(b,a){a=a||g_headers;var c=x(a),e=x(b);if(!c&&!e)return H(b,a);if(c&&e)return A(a,b);if(!c&&e){for(var c=H(null,a),g=0;g<b.length;++g)c[b[g][0]]=b[g][1];return c}if(c&&!e){c=a.slice();for(g in b)c.push([g,b[g]]);return c}},getJson:function(a){try{return JSON.parse(a)}catch(d){throw AnyBalance.trace("Bad json ("+d.message+"): "+a),new AnyBalance.Error("Сервер вернул ошибочные данные: "+
d.message);}},getJsonEval:h,safeEval:q,endsWith:m,parseDateISO:function(a){var d=Date.parse(a);if(d)return AnyBalance.trace("Parsed ("+Date.lastParse+") "+new Date(d)+" from "+a),d;AnyBalance.trace("Could not parse ("+Date.lastParse+") date from "+a)},sumParam:u,aggregate_sum:B,aggregate_join:z,create_aggregate_join:function(a,d){return function(c){return z(c,a,d)}},aggregate_min:function(a){if(0!=a.length){for(var d,c=0;c<a.length;++c)if(!p(d)||d>a[c])d=a[c];return d}},aggregate_max:function(a){if(0!=
a.length){for(var d,c=0;c<a.length;++c)if(!p(d)||d<a[c])d=a[c];return d}},parseTraffic:function(a,d){return C(a,1024,2,d)},parseTrafficGb:function(a,d){return C(a,1024,3,d)},parseTrafficEx:C,requestPostMultipart:function(a,d,c){for(var e="",g=0;16>g;g++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));var g=[],e="------WebKitFormBoundary"+e,f;for(f in d)g.push(e,'Content-Disposition: form-data; name="'+f+'"',"",d[f]);g.push(e+"--\r\n");c||(c=
{});c["Content-Type"]="multipart/form-data; boundary="+e.substr(2);return AnyBalance.requestPost(a,g.join("\r\n"),c)},capitalFirstLetters:function(a){a=a.toLowerCase().split(" ");for(var d="",c=0;c<a.length;c++)d+=a[c].substring(0,1).toUpperCase()+a[c].substring(1)+" ";return d.replace(/^\s+|\s+$/g,"")},setCountersToNull:function(a){for(var d=AnyBalance.getAvailableCounters(),c=0;c<d.length;++c)"--auto--"===d[c]||p(a[d[c]])||(a[d[c]]=null);p(a.__tariff)||(a.__tariff=null)},getElement:P,getJsonObject:function(a,
d){var c=XRegExp.union([/[^\{\}\[\]"'`\/]+/,/"(?:[^"\\]+|\\[\D\d])*"/,/'(?:[^'\\]+|\\[\D\d])*'/,/`(?:[^`\\]+|\\[\D\d])*`/,/\/(?![\*\/])(?:[^\/\\]+|\\.)+\//,/\/\*[\D\d]*?\*\//,/\/\/[^\r\n]*/],"x"),e=0;if(d){e=d.exec(a);if(!e)return;e=e.index+e[0].length}var g=c.source,c=new RegExp("(?:"+g+")*[\\{\\[](?:"+g+")*","g"),g=new RegExp("(?:"+g+")*(?=[\\{\\[])","g");g.lastIndex=e;if(e=g.exec(a))return c.lastIndex=g.lastIndex,e=N(a,c,/[\}\]]/,null,h),d.lastIndex=c.lastIndex,e},getRecursiveMatch:N,getElements:I,
__shouldProcess:function(a,d){return AnyBalance.shouldProcess?AnyBalance.shouldProcess(a,d):!!d.__id},__setLoginSuccessful:function(){AnyBalance.setLoginSuccessful&&AnyBalance.setLoginSuccessful()},fmtDate:function(a,d){p(d)||(d=".");return K({format:"DD"+d+"MM"+d+"YYYY"},a)},n2:J,getFormattedDate:K,joinUrl:function(a,d){if(!d)return a;if(/^\//.test(d))return a.replace(/^(\w+:\/\/[\w.\-]+).*$/,"$1"+d);if(/^\w+:\/\//.test(d))return d;a=a.replace(/\?.*$/,"");/:\/\/.*\//.test(a)&&(a=a.replace(/\/[^\/]*$/,
"/"));m(a,"/")||(a+="/");return a+d},processTable:function(a,d,c,e,g,f){a=I(a,/<tr[^>]*>/ig);for(var h,m,n=0;n<a.length;n++){var l=a[n],p=I(l,/<td[^>]*>/ig);0==p.length?(h=I(l,/<th[^>]*>/ig),m=h.length,h=O(e,h)):p.length==m?(l={},L(e,h,p,l,c),f&&f(l,c),d.push(l)):g&&g(l,p)}},initCols:O,fillColsResult:L}}(this);(function(){for(var l in AB)this[l]=AB[l]})();