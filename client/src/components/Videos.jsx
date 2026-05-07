import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import VideoCard from "./VideoCard";


const Videos = ({ videos, direction }) => {
    
    if (!videos || videos.length === 0) return <Typography>No videos found...</Typography>;

    return (
        <Stack sx={{
            
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    
                    <VideoCard video={item} />
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;