//The following annoys the user with some stupid cookie warning.
function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return '';
}

function setCookie(cname, cvalue, date) {
  if (getCookie('agreed') != 'Yes') return;
    document.cookie = cname + '=' + cvalue + '; ' + expires + 'expires=' + date.toUTCString() + ';';
}

if (getCookie('agreed') == '') {
  var r = confirm('In easy words: EU law enforces me to show this alert: This site uses cookies. Click "OK" to continue, "Cancel" to stop. Disable cookies if you do not like them.\n\n\n\
In complicated words: This site stores information on your terminal equipment in order to provide the given service. Other websites embedded in this website might store information as well.\n\
Click "OK" to allow information to be stored. Click "Cancel" to stop *this* website from storing information. \
A cookie to save your choice will be stored either way, as this is information which is strictly necessary in order to provide service which is explicitly requested to store by you.');
  console.log(r)
  if (r == true) {
    var d = new Date();
    d.setTime(d.getTime() + 31536000000);
    document.cookie = 'agreed=Yes; expires=' + d.toUTCString() + ';';
  } else {
    var d = new Date();
    d.setTime(d.getTime() + 31536000000);
    document.cookie = 'agreed=No; expires=' + d.toUTCString() + ';';
  }
}

//The following loads the website layout.
var title = document.getElementById('title').innerHTML;
var content = document.getElementById('content').innerHTML;
var template = '\
<!DOCTYPE html> \
<html> \
<head> \
	<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
	<meta charset="UTF-8"> \
	<link rel="shortcut icon" href="/favicons/favicon-desktop.ico"> \
	<meta name="robots" content="index,follow"> \
	<meta http-equiv="cache-control" content="Public|Private"> \
	<title>'+title+'</title> \
	<link rel="stylesheet" href="/styles.css"></style> \
</head> \
<body class="tp-dync2"> \
\
<header class="tp-dync" align="center" style="background-color:#77ffff; font-family: serif; width:100%;"> \
	<h1>FreeSwfGames</h1> \
	"Coding Games..." \
</header> \
 \
\
<nav class="tp-dync"><br> \
	<a href="http://freeswfgames.github.io/email.html">Something No Working? Tell Me Here!</a><br><br> \
	<a href="http://freeswfgames.github.io/cheats/cheats.html">Cheats Page</a><br><br> \
	<a href="http://freeswfgames.github.io/newsletter.html">Subscribe to Newsletter</a><br><br> \
	</nav> \
<aside class="tp-dync"> \
	<h4>News</h4> \
	--- More Games to Come;) ---<br> \
\
	<h4>Clicks</h4><iframe src="/counter.html" seamless="seamless" frameborder="0" style="width:125px; height:56px;"></iframe><br><br> \
	</aside> \
\
<section class="tp-dync2"><br> \
	' + content + ' \
</section> \
';
document.documentElement.innerHTML = template;
