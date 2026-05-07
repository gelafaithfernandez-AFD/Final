import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Box, Stack, Typography, Avatar } from '@mui/material';
import myVideos from '../utils/Categories';
import VideoCard from '../components/VideoCard';


function Watch() {
    const { id } = useParams();

    const videoDetails = myVideos.find((video) => video.id === id);
    const videoChannel = myVideos.find((video) => video.id === id);

    return (
        <Stack>
            <Box sx={{
                minHeight: '92vh',
                
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center"

            }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '1000px',
                    aspectRatio: '16/9',
                    borderRadius: "20px "
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        // CRITICAL: Must use /embed/ID
                        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        
                    ></iframe>
                </Box>

                <Box sx={{ width: '100%', maxWidth: '1000px', mt: 3, color: 'white' }}>
                    <Typography variant="h5" fontWeight="bold">{videoDetails?.title || "Video Title not found"}</Typography>

                

                    <Box sx={{
                        mt: "20px",
                        
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "start",
                            gap: "10px ",
                            
                        }}>

                            <Avatar sx={{
                                bgcolor: "secondary.main"
                            }}>
                                {videoChannel?.channel.charAt(0)}
                            </Avatar>

                            <Typography variant="h5" fontWeight="bold">{videoDetails?.channel || "Video Title not found"}</Typography>
                        </Box>

                    </Box>
                </Box>

            </Box>
            <Box>

            </Box>
        </Stack>
    );
}

export default Watch;