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

function keypressed() 
{
alert("Mouse right click is disabled! ::miruTV.com::");
}

document.onkeydown=keypressed;

//norightclick
function shake() 
{
   if (event.button==2) {
   var x=10
   if (document.all||document.layers) 
   {
   for (i=0;i,i<20;i++){
	window.moveBy(0,x)
	window.moveBy(x,0)
	window.moveBy(0,-x)
	window.moveBy(-x,0)
     	}
    }
  }
}

document.onmousedown=shake
document.write('<body oncontextmenu="return false">');

var message = "Mouse right click is disabled! ::miruTV.com:: ;D"; 
function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ 	alert(message); return false; } 

if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { 	alert(message); 	return false; } } 
document.onmousedown = rtclickcheck;