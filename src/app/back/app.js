const express = require("express");
const http = require("http");
const io = require("socket.io");


const app = express();
const server = http.createServer(app);
const socketServer = io(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  },
});
const arr=[]

socketServer.on("connection", (socket) => {
  console.log("A client connected");


  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });


  socket.on("message", (data) => {
    console.log(`Received message: ${data}`);
    socket.emit("message", `Server received message: ${data}`);
  });

  socket.on("getUserName", (data) => {
    console.log(`Received message: ${data}`);
    socket.emit("message", `Server received message: ${data}`);
  });

  socket.on("getStart", (data) => {
    console.log(`Received getStart: ${data}`);
    socket.emit("message", `Server received getStart: ${data}`);
  });

  socket.on("getTime", () => {
    let date_ob = new Date();
    socket.emit("postTime", `postTime: ${date_ob.toDateString()}`);
  });

  socket.on("add", (obj) => {
    arr.push(obj)
    socket.emit("add", `add: ${JSON.stringify(arr)}`);
  });



});



server.listen(443, () => {
  console.log("Server listening on port 443");
});
