import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import VideoCard from "../components/VideoCard";
import Videos from "../components/Videos";

import myVideos from "../utils/Categories";
import Sidebar from "../components/Sidebar";
// pages/Home.jsx
const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("Anime");
    const [videos, setVideos] = useState([]);

    // Home.jsx
    useEffect(() => {
        // .filter returns an ARRAY of all matches
        const filteredData = myVideos.filter((video) => video.name === selectedCategory);

        console.log(`Category: ${selectedCategory} | Found: ${filteredData.length} videos`);

        setVideos(filteredData);
    }, [selectedCategory]);
    return(
        <>
        <Stack sx={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Box sx={{

            }}>
                    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, gap:"20px" }}>
                    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "text.primary", mt: "20px" }}>
                        {selectedCategory} <span style={{ color: "text.primary" }}>videos</span>
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center"
                        
                    }}>
                        <Videos videos={videos} />
                    </Box>
                    
            </Box>
        </Stack>
        
        </>
    )
};

export default Home;