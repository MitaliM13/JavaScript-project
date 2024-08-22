import express from "express"
import { Server } from "socket.io"
import {createServer} from "http"
import cors from 'cors'

const port = 3000
const app = express()

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        Credentials: true
    }
})

app.use(cors())

app.get("/", (req, res) => {
    res.send("Byeeee!")
})

io.on("connection", (socket) => {

    console.log("user Connected");

})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})