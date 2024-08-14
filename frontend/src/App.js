import { Box, Heading, Container } from "@chakra-ui/react"
import Notification from "./components/Notification"
import Options from "./components/Options"
import VideoPlayer from "./components/VideoPlayer"


function App() {

  return (
    <Box>
      <Container maxW="1200px" mt={"8px"} >
        <Heading as={"h2"} size="2xl">Video chat app</Heading>
        <VideoPlayer />
        <Options />
        <Notification />
      </Container>
    </Box>
  )
}

export default App
