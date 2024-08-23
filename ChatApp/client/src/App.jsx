import { useEffect, useState, useRef } from 'react'
import { io } from 'socket.io-client'
import { Button, Container, TextField, Typography, CircularProgress } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { format } from 'date-fns'

const App = () => {
  const [msg, setMsg] = useState([])
  const [message, setMessage] = useState('')
  const [roomName, setRoomName] = useState('')
  const [socketId, setSocketId] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [isRoomJoined, setIsRoomJoined] = useState(false)
  const messagesEndRef = useRef(null)
  const socketRef = useRef(null)

  useEffect(() => {
    // Initialize socket only once when component mounts
    socketRef.current = io(`http://localhost:3000`)

    socketRef.current.on("connect", () => {
      setSocketId(socketRef.current.id)
      setIsConnected(true)
      console.log(`Connected`, socketRef.current.id)
    })

    socketRef.current.on("received-message", (data) => {
      setMsg((messages) => [...messages, data])
    })

    return () => {
      socketRef.current.disconnect()  // Disconnect socket when component unmounts
    }
  }, [])

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msg])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() === '') return
    const timestamp = format(new Date(), 'HH:mm')
    const newMessage = { message, room: roomName, sender: 'You', timestamp }
    
    // Ensure that the room name is passed along with the message
    socketRef.current.emit("message", newMessage)
    
    setMsg((messages) => [...messages, newMessage])
    setMessage('')
  }

  const joinRoomHandler = (e) => {
    e.preventDefault()
    if (roomName.trim() === '') return
    
    // Join the room via socket
    socketRef.current.emit('join-room', roomName)
    setIsRoomJoined(true)
  }

  return (
    <Container maxWidth="sm" className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <div className="text-center mb-8">
        {isConnected ? (
          <Typography variant="h6" component="div">
            Connected as: <span className="font-bold">{socketId}</span>
          </Typography>
        ) : (
          <CircularProgress color="primary" />
        )}
      </div>

      {/* Join Room Form */}
      {!isRoomJoined && (
        <form onSubmit={joinRoomHandler} className="mb-6">
          <Typography variant="h5" gutterBottom className="text-gray-700 font-semibold">
            Join a Chat Room
          </Typography>
          <TextField
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            label='Room Name'
            variant='outlined'
            fullWidth
            margin='normal'
            className="mb-4"
            disabled={isRoomJoined}
          />
          <Button type='submit' variant='contained' color='primary' fullWidth disabled={isRoomJoined} className="bg-purple-600">
            {isRoomJoined ? 'Joined' : 'Join Room'}
          </Button>
        </form>
      )}

      {/* Message Form */}
      {isRoomJoined && (
        <>
          <form onSubmit={handleSubmit} className="flex mb-6">
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              label='Message'
              variant='outlined'
              fullWidth
              margin='normal'
              className="flex-grow"
            />
            <Button type='submit' variant='contained' color='primary' className="ml-2 bg-purple-600">
              <SendIcon />
            </Button>
          </form>

          {/* Display Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-100 rounded-lg shadow-inner mb-4">
            {msg.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'You' ? 'justify-end' : 'justify-start'} mb-2`}>
                <div className={`p-3 rounded-lg shadow ${m.sender === 'You' ? 'bg-purple-500 text-white' : 'bg-white text-black'}`}>
                  <Typography variant='body1'>{m.message}</Typography>
                  <Typography variant='caption' className="text-xs text-gray-400">
                    {m.sender} • {m.timestamp}
                  </Typography>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </>
      )}
    </Container>
  )
}

export default App
