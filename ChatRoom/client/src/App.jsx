import { useEffect, useMemo, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import { Container, Typography, TextField, Button, Box, Avatar, List, ListItem, ListItemText, Badge } from '@mui/material';
import { EmojiEmotions, AttachFile, Send } from '@mui/icons-material';
import './ChatRoom.css';
// import debounce from 'lodash.debounce'; // Add debounce if not already installed

const App = () => {
  const [socket] = useState(() => io("http://localhost:5000"));
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketId, setSocketId] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  // Join room logic
  const handleJoinRoom = useCallback(() => {
    if (room) {
      socket.emit("join_room", room);
    }
  }, [room, socket]);

  // Send message logic
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (message && room) {
      socket.emit("message", { message, room });
      setMessage(""); // Clear input
    }
  }, [message, room, socket]);

  // Debounced input handler to avoid excessive re-renders on input change
  const handleInputChange = useCallback(
    debounce((e) => setMessage(e.target.value), 300),
    []
  );

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
    });

    socket.on("Message-received", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("user_list", (userList) => {
      setUsers(userList); // Show online users
    });

    return () => {
      socket.emit('leave_room', room); // Leave room when component unmounts
      socket.disconnect();
    };
  }, [socket, room]);

  return (
    <Container>
      <Box display="flex" flexDirection="row">
        {/* Sidebar for online users */}
        <Box width="25%" bgcolor="lightgray" p={2} className="user-sidebar">
          <Typography variant="h5">Online Users</Typography>
          <List>
            {users.map((user) => (
              <ListItem key={user.id}>
                <Badge color="success" variant="dot">
                  <Avatar alt={user.name} src={user.avatar || ''} />
                </Badge>
                <ListItemText primary={user.name || `User ${user.id}`} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Chat window */}
        <Box width="75%" p={2} className="chat-window">
          <Typography variant="h4">Chat Room</Typography>
          <Box className="messages">
            {messages.map((msg, index) => (
              <Box key={index} className="message-bubble">
                <Typography variant="body1">{msg}</Typography>
              </Box>
            ))}
          </Box>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="chat-input">
            <TextField
              value={message}
              onChange={handleInputChange}
              label="Type your message..."
              variant="outlined"
              fullWidth
            />
            <Button startIcon={<EmojiEmotions />} />
            <Button startIcon={<AttachFile />} />
            <Button type="submit" startIcon={<Send />} color="primary" variant="contained">
              Send
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
