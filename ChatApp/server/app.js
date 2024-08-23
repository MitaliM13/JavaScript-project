import express from "express"
import { Server } from "socket.io"
import { createServer } from "http"
import cors from 'cors'

const port = 3000
const app = express()

const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }
})

app.use(cors())

app.get("/", (req, res) => {
  res.send("Server started")
})

io.on("connection", (socket) => {
  console.log("User Connected", socket.id)

  // Join Room
  socket.on("join-room", (room) => {
    socket.join(room)
    console.log(`${socket.id} joined room: ${room}`)
  })

  // Send Message to Room
  socket.on("message", ({ room, message }) => {
    console.log(`Message from room ${room}:`, message)
    
    // Emit the message to the room
    io.to(room).emit("received-message", message)
  })

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`)
  })
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
