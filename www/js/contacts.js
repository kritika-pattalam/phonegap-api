/** Called when phonegap javascript is loaded */
           function onContactsReady() {
    // find all contacts
    var options = new ContactFindOptions();
    options.filter="";          // empty search string returns all contacts
    options.multiple=true;
    var fields = ["phoneNumbers", "name"];
    navigator.contacts.find(fields, onCSuccess, onError, options);
}

// onSuccess: Get a snapshot of the current contacts
//
function onCSuccess(contacts) {
    var ul = document.getElementById("list");
    for(var index=0;index<5;index++){
    var name = contacts[index].name.formatted;
    var phoneNumber = contacts[index].phoneNumbers[0].value;
    $('#list').append("<li><a href=\"tel:"+phoneNumber+"\">"+name+phoneNumber+"</a></li>");
    $('#list').listview('refresh');
    
    }
    }

// onError: Failed to get the contacts
//
function onError(contactError) {
    alert('onError!');
}
            /** Called when browser load this page*/
            function initcontacts(){
            document.addEventListener("deviceready", onContactsReady, false);
            }