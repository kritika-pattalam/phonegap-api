

function initdevice(){
            document.addEventListener("deviceready", onDeviceReadydevice, false);
            StatusBar.hide();
            }
function onDeviceReadydevice()
{
    // api-device
    
    document.getElementById("deviceName").innerHTML= device.model;
    document.getElementById("mobilePlatform").innerHTML= device.platform;
    document.getElementById("mobileVersion").innerHTML= device.version;
    document.getElementById("version").innerHTML= device.cordova; 
    document.getElementById("uuid").innerHTML= device.uuid;
    // screen information  ***Not necessary to wait for deviceready event
    document.getElementById("width").innerHTML = screen.width;
    document.getElementById("height").innerHTML = screen.height;
    document.getElementById("availwidth").innerHTML = screen.availWidth;
    document.getElementById("availheight").innerHTML = screen.availHeight;
    document.getElementById("colorDepth").innerHTML = screen.colorDepth; 
}