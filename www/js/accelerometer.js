var watchID = null;
/** Called when browser load this page*/
        function initaccelerometer(){
            document.addEventListener("deviceready", onAccelReady, false);
        }
        /** Called when phonegap javascript is loaded */
        function onAccelReady(){
            startWatch();
            
            }
            function startWatch(){
                var options = { frequency: 1000 }; // Update every 1 seconds
            //OTHER methods getCurrentAcceleration, clearWatch()
           
            watchID =navigator.accelerometer.watchAcceleration(onSuccess,onError,options);
            
            

            }
            function stopWatch() {
                if (watchID) {
                    
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;

                document.getElementById('stopped').innerHTML = "No longer watching your acceleration.";
               
                }
            }
        function onSuccess(acceleration) {
            document.getElementById('x').innerHTML = acceleration.x;
            document.getElementById('y').innerHTML = acceleration.y;
            document.getElementById('z').innerHTML = acceleration.z;
            document.getElementById('timestamp').innerHTML= acceleration.timestamp;
            document.getElementById('stopped').innerHTML = "Watching your acceleration";
        }
        function onError(error) {
            alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        }
        