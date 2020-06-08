var socket = io();
socket.on("connect", function () {
  console.log("Se conecto al servidor");
});
//escuchar
socket.on("disconnect", function () {
  console.log("Se perdio la conecion al servidor");
});

//enviar
socket.emit(
  "enviar_mensaje",
  {
    usuario: "Peter",
    message: "Hola q pex",
  },

  function (res) {
    console.log("server  responde: ", res);
  }
);

//escuchar
socket.on("enviar_mensaje", function (data) {
  console.log("servidor dice", data);
});
