const express = require("express")
const http = require("http")
const cors = require("cors")
const socketIO = require("socket.io")

const app = express()
const server = http.createServer(app);
app.use(cors());

const io = socketIO(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello world")
});


io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`)
    socket.emit("me", socket.id)

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
    });

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUser", { signal: signalData, from, name });
    })

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    })
})


server.listen(PORT, () => console.log(`server runnig on port http://localhost:${PORT}`));
