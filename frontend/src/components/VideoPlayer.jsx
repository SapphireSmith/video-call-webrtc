import React from 'react'
import { Grid, Box, Heading } from '@chakra-ui/react'
import { SocketContext } from '../context/context'
import { useContext } from 'react'


const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)

    return (
        <Grid justifyContent={"center"} templateColumns={'repeat(2, 1fr)'} mt="12">
            {
                stream && (
                    <Box>
                        <Grid colSpan={1}>
                            <Heading as={'h5'}>
                                {name || 'Name'}
                            </Heading>
                            <video playsInline muted ref={myVideo} autoPlay width={'600'} />
                        </Grid>
                    </Box>
                )
            }

            {
                callAccepted && !callEnded && (
                    <Box>
                        <Grid colSpan={1}>
                            <Heading as={'h5'}>
                                {call.name || 'Name'}
                            </Heading>
                            <video playsInline muted ref={userVideo} autoPlay width={'600'} />

                        </Grid>
                    </Box>
                )
            }
        </Grid>
    )
}

export default VideoPlayer