$(document).ready(function () {
    console.log("doc is ready");

    var PreBtn = document.getElementById("preview-btn");

    // Click event on preview button
    PreBtn.addEventListener("click",displayData);

    // Puts user input in hidden data field
    function displayData(){

        var elHours=document.getElementById("hours-input");
        var elMinutes=document.getElementById("minutes-input");
      var elSeconds=document.getElementById("seconds-input");

        $("#data").html(
            `<p> You entered <b> ` + elHours.value + `</b> (Hours) <b>` + elMinutes.value + `</b> (Minutes) <b>` +
elSeconds.value + `</b> (Seconds)</p>`
        )
    }
    

})