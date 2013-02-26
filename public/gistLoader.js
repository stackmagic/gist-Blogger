function loadLoader() {
    var gistScriptId = 'gistPrinter';
    if (document.getElementById(gistScriptId) === null) {
        var elem = document.createElement('SCRIPT');
        elem.id = gistScriptId;
        elem.onload = function() {
          initGist();
        }
        elem.src = "https://raw.github.com/stackmagic/gist-Blogger/master/public/gistBlogger.js";
        var theBody = document.getElementsByTagName('body')[0];
        theBody.appendChild(elem);
    }
}

(function() {
    try {
        initGist();
    } catch(e) {
        var jqueryScriptId = "jquery";
        if (document.getElementById(jqueryScriptId) == null) {
            var elem = document.createElement('SCRIPT');
            elem.id = jqueryScriptId;
            elem.onload = function() {
                loadLoader();
            }
            elem.src = "https://raw.github.com/stackmagic/gist-Blogger/master/public/jquery-1.8.3.min.js";
            var theBody = document.getElementsByTagName('body')[0];
            theBody.appendChild(elem);
        }
    }
})();
