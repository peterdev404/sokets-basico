const express = require("express");
const socketIO = require("socket.io");

const path = require("path");
const app = express();

const http = require("http");
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;
//io =comunicacion con el backend
let io = socketIO(server);

module.exports.io = socketIO(server);
// localhost:3000/socket.io/socket.io.js
require("./sockets/socket");

app.use(express.static(publicPath));
server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor corriendo en puerto ${port}`);
});
