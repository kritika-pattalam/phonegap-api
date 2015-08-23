/** Called when browser load this page*/
        function initgeolocation(){
            document.addEventListener("deviceready", onGeolocationReady, false);
        }
        function onGeolocationReady() {
			navigator.geolocation.getCurrentPosition(ongeoSuccess, onErrorgeo);
			}


		function ongeoSuccess(position) {
			document.getElementById("latitude").innerHTML= position.coords.latitude;
		    document.getElementById("longitude").innerHTML= position.coords.longitude;
		    document.getElementById("altitude").innerHTML= position.coords.altitude;
		    document.getElementById("accuracy").innerHTML= position.coords.accuracy; 
		    document.getElementById("altAccuracy").innerHTML= position.coords.altitudeAccuracy;		    
		    document.getElementById("heading").innerHTML = position.coords.heading;
		    document.getElementById("speed").innerHTML = position.coords.speed;
		    document.getElementById("timeStamp").innerHTML = position.timestamp;
		    
		}
		// obtaining the position data
		function onErrorgeo(error) {
		var errString = '';
		// Check to see if we have received an error code
		if(error.code) {
		// If we have, handle it by case
		switch(error.code)
		{
			case 1: // PERMISSION_DENIED
				errString =	'Unable to obtain the location information because the device does not have permission '+
				'to the use that service.';
				break;
			case 2: // POSITION_UNAVAILABLE
				errString ='Unable to obtain the location information because the device location could not be determined.';
				break;
			case 3: // TIMEOUT
				errString =	'Unable to obtain the location within the specified time allocation.';
				break;
			default: // UNKOWN_ERROR
				errString =	'Unable to obtain the location of the device due to an unknown error.';
				break;
			}
			}
			// Handle any errors we may face
			var element = document.getElementById('geolocationinfo');
			element.innerHTML = errString;
		}