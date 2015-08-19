var res;

function initcapture() {
	//Add the PhoneGap deviceready event listener
	document.addEventListener("deviceready", onCaptureReady,false);
}
function onCaptureReady() {
	//Get a handle to the results area of the page
	//we'll need it later
	res = document.getElementById("captureResults");
}
function doCapture() {
	//Clear out any previous results
	res = document.getElementById("captureResults");
	res.innerHTML = "Initiating capture...";
	//Get some values from the page
	var numItems = document.getElementById("numItems").value;
	var capDur = document.getElementById("duration").value;
	//Figure out which option is selected
	var captureType = document.getElementById("captureType").selectedIndex;
	switch(captureType) {
	case 0:
		//Capture Audio
		navigator.device.capture.captureAudio(
		onCaptureSuccess, onCaptureError,
		{duration: capDur, limit: numItems});
	    break;
	case 1:
		//Capture Image
		navigator.device.capture.captureImage(
		onCaptureSuccess, onCaptureError,
		{limit: numItems});
		break;
	case 2:
		//Capture Video
		navigator.device.capture.captureVideo(
		onCaptureSuccess, onCaptureError,
		{duration: capDur, limit: numItems});
		break;
		}
	}
function onCaptureSuccess(fileList) {
	var i, len, htmlStr;
	len = fileList.length;
	//Make sure we had a result; it should always be
	//greater than 0, but you never know.
	if(len > 0) {
		htmlStr = "<p>Results:</p><ol>";
		for( i = 0, len; i < len; i += 1) {
			//alert(fileList[i].fullPath);
			htmlStr += '<li><a href="file:/' +
			fileList[i].fullPath + '">' + fileList[i].name +
			'</a></li>';
		}
		htmlStr += "</ol>";
		//Set the results content
		res.innerHTML = htmlStr;
	}
}
function onCaptureError(e) {
	var msgText;
	//Clear the results text, nothing to show
	res.innerHTML = "";
	//Now build a message string based upon the
	//error returned by the API
	switch(e.code) {
	case CaptureError.CAPTURE_INTERNAL_ERR:
		msgText = "Internal error, the camera or microphone failed to capture image or sound.";
		break;
	case CaptureError.CAPTURE_APPLICATION_BUSY:
		msgText = "The camera application or audio capture application is currently serving other capture request.";
		break;
	case CaptureError.CAPTURE_INVALID_ARGUMENT:
		msgText = "Invalid parameter passed to the API.";
		break;
	case CaptureError.CAPTURE_NO_MEDIA_FILES:
		msgText = "User likely cancelled the capture process.";
		break;
	case CaptureError.CAPTURE_NOT_SUPPORTED:
		msgText = "The requested operation is not supported on this device.";
		break;
	default:
	//Create a generic response, just in case the
	//following switch fails
	msgText = "Unknown Error (" + e.code + ")";
	}
	//Now tell the user what happened
	navigator.notification.alert(msgText, null,"Capture Error");
}