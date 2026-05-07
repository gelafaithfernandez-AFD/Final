import { Card, CardContent, Typography, CardActionArea, CardMedia, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

// We pass 'video' as a prop to handle multiple videos
function VideoCard({ video }) {
    const navigate = useNavigate();

    return (
        <Card color="" sx={{
            width: { xs: '100%', sm: '358px', md: "320px" },
           
            borderRadius: "10px",
            

            overflow: "hidden",
            
        }}>
            <CardActionArea onClick={() => navigate(`/watch/${video.id}`)}>
                <CardMedia
                    component="img"
                    height="180"
                    // This works because your IDs are valid YouTube IDs
                    image={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                />
                <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff" sx={{
                        height: "30px",
                        overflow: "hidden",
                        color: "text.primary"
                    }}>
                        {video.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                        color: "text.primary"
                    }}>
                        {video.channel}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default VideoCard;