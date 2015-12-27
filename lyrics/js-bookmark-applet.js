if (typeof window.lyricsScript === 'undefined') {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('async', 'true');
    script.setAttribute('src', 'https://mcmanuellp.github.io/lyrics/lyricscrawler.js');
    document.documentElement.appendChild(script);
    script.onload = script.onreadystatechange = function () {
        var rs = script.readyState;
        if (!rs || rs === 'loaded' || rs === 'complete') {
            script.onload = script.onreadystatechange = null;
            init();
        }
    };
} else {
    init();
}
