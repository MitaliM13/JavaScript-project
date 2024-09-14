import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'

const PORT = 5000
const app = express()

const server = createServer(app)

const io = new Server(server)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
)