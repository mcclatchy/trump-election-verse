$(document).ready(function() {

    setShareURL();

    function setShareURL() {
        var projectURL = window.location.href;
        projectURL = "http://www.mcclatchydc.com/news/nation-world/national/article127247514.html";

        // Facebook
        var facebookURL = "http://www.facebook.com/sharer/sharer.php?u=" + projectURL;
        $('#hc-facebook-share').attr("href", facebookURL);

        // Twitter
        var metaTitle = $('meta[name=title]').attr('content');
        var title = metaTitle.split(' | ');
        var twitterPartial = encodeURI(title[0]);
        twitterPartial = amperOctoPlus(twitterPartial);
        var twitterURL = "https://twitter.com/home?status=" + twitterPartial + "%20" + projectURL;
        $("#hc-twitter-share").attr("href", twitterURL);

        // Email
        var emailPartial = "mailto:?subject= How Trump’s Election changed my life - McClatchy&body=";
        var emailURL = emailPartial + projectURL;
        $("#hc-email-share").attr("href", emailURL);
    }

    // Clean up ampersands, octothorpes, and pluses
    function amperOctoPlus(url) {
        url = url.replace(/&/g, '%26');
        url = url.replace(/#/g, '%23');
        url = url.replace(/\+/g, '%2B');
        url = url.replace(/@/g, '%40');
        url = url.replace(/:/g, '%3A');
        return url;
    }

});
