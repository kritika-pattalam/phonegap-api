/** Called when phonegap javascript is loaded */
            function onConnectionReady(){
                fetchNetworkConnectionInfo();
            }
            function fetchNetworkConnectionInfo(){
                var networkType = navigator.connection.type;
                var networkTypes = {};
                networkTypes[Connection.NONE] = 'No network connection';
                networkTypes[Connection.UNKNOWN] = 'Unable to identify Network Connection Type';
                networkTypes[Connection.CELL_2G] = 'Network Connection is of type 2G';
                networkTypes[Connection.CELL_3G] = 'Network Connection is of type 3G';
                networkTypes[Connection.CELL_4G] = 'Network Connection is of type 4G';
                networkTypes[Connection.WIFI]    = 'Network Connection is of type WiFi';
                networkTypes[Connection.ETHERNET]= 'Network Connection is of type Ethernet';
                document.getElementById("network-status").innerHTML = networkTypes[networkType];
            }
            /** Called when browser load this page*/
            function initconnection(){
                document.addEventListener("deviceready", onConnectionReady, false);
            }