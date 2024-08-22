// import React from 'react'
import { useEffect } from 'react'
import {io} from 'socket.io-client'
import {Container, Typography } from '@mui/material'

const App = () => {

  const socket = io(`http://localhost:3000`)

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`connected`, socket.id);
    })

    socket.on("Welcome", (s) => {
      console.log(s);
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <Container maxWidth = "sm">
      <Typography variant='h1' component="div" gutterBottom>
          Welcome to socket.io
      </Typography>
    </Container>
  )

}

export default App