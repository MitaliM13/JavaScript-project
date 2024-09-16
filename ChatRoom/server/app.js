import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

const PORT = 5000;
const app = express();

const server = createServer(app);

// Configuring CORS for client-side connection
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('User connected', socket.id);

  // Emit list of online users to the room
  io.emit('user_list', getAllConnectedUsers());

  // Function to get all connected users
  const getAllConnectedUsers = () => {
    return Array.from(io.sockets.sockets.values()).map(s => ({ id: s.id }));
  };

  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
    io.to(room).emit('user_list', getUsersInRoom(room));
  });

  // Get users in a specific room
  const getUsersInRoom = (room) => {
    return Array.from(io.sockets.adapter.rooms.get(room) || []).map(socketId => ({
      id: socketId,
      name: io.sockets.sockets.get(socketId)?.name // Placeholder for user name
    }));
  };

  socket.on('message', ({ message, room }) => {
    io.to(room).emit('Message-received', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
    io.emit('user_list', getAllConnectedUsers()); // Update user list on disconnect
  });
});

server.listen(PORT, () => 
  console.log(`Server is running on port ${PORT}`)
);
