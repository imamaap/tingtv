// <![CDATA[
 
/* Free code from dyn-web.com */
 
// Two choices for loading new pages into the iframe 
function loadIframe(iframeName, url) {
    if ( window.frames[iframeName] ) {
        window.frames[iframeName].location = url;   
        return false;
    }
    return true;
}
 
function changeIframeSrc(id, url) {
    if (!document.getElementById) return;
    var el = document.getElementById(id);
    if (el && el.src) {
        el.src = url;
        return false;
    }
    return true;
}
// ]]>

