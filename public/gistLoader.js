(function() {

    var jqueryPath      = "https://raw.github.com/stackmagic/gist-Blogger/master/public/jquery-1.8.3.min.js";
    var gistBloggerPath = "https://raw.github.com/moski/gist-Blogger/master/public/gistBlogger.js";

    // Initialize the load the main script.
    try {
        initGist();
    } catch(e) {
        var jqueryScriptId = "jquery";
        if (document.getElementById(jqueryScriptId) == null) {
            var elem = document.createElement('SCRIPT');
            elem.id = jqueryScriptId;
            var theBody = document.getElementsByTagName('body')[0];
            theBody.appendChild(elem);
        }

        var gistScriptId = 'gistPrinter';
        if (document.getElementById(gistScriptId) === null) {
            var elem = document.createElement('SCRIPT');
            elem.id = gistScriptId;
            elem.onload = function() {
              initGist();
            }
            elem.src = gistBloggerPath;
            var theBody = document.getElementsByTagName('body')[0];
            theBody.appendChild(elem);
        }
    }
})();