var av_gbook_lang, av_gbook_sync;

(function() {
    var query = location.href;
    var enc = document.characterSet || document.charset;
    var url = "/php/guestbook_en_js.php?AV_GB_ID=" + encodeURIComponent(location.href) + "&lang=" + av_gbook_lang + "&enc=" + enc + "&cb=" + (new Date()).valueOf();
    try {
        if (av_gbook_sync) throw true;
        var xhr = (typeof XDomainRequest == "undefined") ? new XMLHttpRequest() : new XDomainRequest();
        if (!xhr) throw new TypeError();
        document.writeln('<div id="av-guestbook"></div>');
        xhr.open("GET", url);
        if (typeof XDomainRequest == "undefined") {
            xhr.onreadystatechange = function() { if (xhr.readyState == 4 && xhr.status == 200) document.getElementById('av-guestbook').innerHTML = xhr.responseText }
        } else {
            xhr.onload = function() { document.getElementById('av-guestbook').innerHTML = xhr.responseText }
        }
        xhr.send();
    } catch (e) {
        document.write('<' + 'script type="text/javascript" src="' + url + '&compat=1"></' + 'script>');
    }
    var css = document.createElement('link');
    css.rel = "stylesheet";
    css.type = "text/css";
    css.href = "/css/guestbook.css";
    document.getElementsByTagName('head')[0].appendChild(css);
})();