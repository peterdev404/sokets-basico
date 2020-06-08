const { io } = require("../server");

io.on("connection", (client) => {
  console.log("usuario conectado");

  client.on("disconnect", () => {
    console.log("usuario desconectado");
  });

  client.emit("enviar_mensaje", {
    usuario: "Admin",
    message: "Bienvenido a esta app",
  });

  client.on("enviar_mensaje", (data, callback) => {
    console.log("cliente dice: ", data);

    client.broadcast.emit("enviar_mensaje", data);

    /*  if (mensaje.usuario) {
      callback({
        res: "Todo bien",
      });
    } else {
      callback({
        res: "Todo mal!!!!",
      });
    }*/
  });
});
