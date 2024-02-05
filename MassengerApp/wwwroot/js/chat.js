/// <reference path="../lib/microsoft/signalr/dist/browser/signalr.js" />


var username = prompt("enter your name", "DITC");

var hubBuilder = new signalR.HubConnectionBuilder();
var connection = hubBuilder.withUrl("/chat").build();





connection.on("receive", function (user, message) {
    var usm = document.createElement("abc");


    usm.textContent = `${user} : ${message}`;

    $('#chatLog').append(usm);


});

connection.start();



$('#btnSend').on('click', function () {

    var message = $('#txtInput').val();

    connection.invoke("Share", username, message);
    $('#txtInput').val(null);
})