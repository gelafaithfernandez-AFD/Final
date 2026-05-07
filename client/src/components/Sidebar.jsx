import { Stack } from "@mui/material";
import myVideos from "../utils/Categories"; // This is your array of 11 videos

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    // 1. Create a unique list of category names
    // This turns ["Anime", "Anime", "Music", ...] into ["Anime", "Music", ...]
    const uniqueCategories = [...new Set(myVideos.map(video => video.name))];

    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                alignItems: "center"
            }}
        >
            {/* 2. Map over uniqueCategories instead of myVideos */}
            {uniqueCategories.map((categoryName) => (
                <button
                    className="category-btn"
                    onClick={() => setSelectedCategory(categoryName)}
                    style={{
                        borderBottom: categoryName === selectedCategory ? "1px solid white" : "transparent",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer",
                        textAlign: "left",
                        marginTop: "20px"
                    }}
                    key={categoryName}
                >
                    <span style={{
                        opacity: categoryName === selectedCategory ? "1" : "0.8",
                        fontWeight: 700
                    }}>
                        {categoryName}
                    </span>
                </button>
            ))}
        </Stack>
    );
}

export default Sidebar;