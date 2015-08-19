function initcamera() {
document.addEventListener("deviceready", onDeviceReadycamera,
false);
}
function onDeviceReadycamera() {
navigator.notification.alert("onDeviceReady");
}
function takePhoto() {
var cameraOptions = { quality : 75,
sourceType : Camera.PictureSourceType.CAMERA,
destinationType : Camera.DestinationType.FILE_URI,
allowEdit : true,
encodingType: Camera.EncodingType.JPEG,
targetWidth: 1024,
targetHeight: 768 };
navigator.camera.getPicture(onCameraSuccess,onCameraError,cameraOptions);
}
function onCameraSuccess(imageURL) {
//Get a handle to the image container div
ic = document.getElementById('imageContainer');
//Then write an image tag out to the div using the
//URL we received from the camera application.
ic.innerHTML = '<img src="' + imageURL +
'" width="50%" />';
}
function onCameraError(e) {
navigator.notification.alert("onCameraError: " + e);
}