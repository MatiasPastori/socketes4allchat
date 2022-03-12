console.log("Server Start");

const express = require("express");
const path = require("path");
const SocketIO = require("socket.io");

const app = express();

// Server Settings
app.set("port", process.env.PORT || 3000);

//Server Start
const server = app.listen(app.get("port"), () => {
  console.log("server listening to: ", app.get("port"));
});

// static files
app.use(express.static(path.join(__dirname, "public")));

// WebSockets
const io = SocketIO(server);
io.on('connection', (socket)=> {
  console.log('New connection', socket.id);
});
