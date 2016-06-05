/*(navigator.onLine) ? console.log("hay señal") : console.log("no hay");
localStorage.setItem("nombre", "Brenda");


$(document).on("mobileinit", function () {
    $.mobile.ignoreContentEnabled=true;
    $('#search-info').bind( "click", function(event, ui) {
  		alert('hl')
	});

});
*/

document.addEventListener("deviceready", onBatteryStatus, false);
function onBatteryStatus(info) {
	console.log("hola")
    // Handle the online event
    alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
/*
cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
    alert("encode success: " + success);
  }, function(fail) {
    alert("encoding failed: " + fail);
  }
);

*/
function Generate(){    
     var qrcode = new QRCode("qrcode");    
     var TBCode = document.getElementById("text");    
        
    if (!TBCode.value) {    
        alert("Input a text");    
        TBCode.focus();    
        return;    
    
    }
}
    qrcode.makeCode(TBCode.value);  