import { Stack, Box, Avatar, Typography } from "@mui/material"

const Profile = () => {
    return (
        <Stack sx={{
            height: "100vh",
            position: "relative"
        }}>

            <Box sx={{

                mt: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "10px"
            }}><Avatar sx={{
                height: "100px",
                width: "100px",

            }}>
                    h
                </Avatar>

                <Box>
                    <Typography variant="h4" sx={{

                    }}>
                        Guest
                    </Typography>
                    <Typography variant="p" sx={{

                    }}>
                        Guest@gmail.com
                    </Typography>
                </Box>

            </Box>

            <Box sx={{
                mt: "30px"
            }}>
                <Typography variant="h4" sx={{
                    textIndent: " 30px"
                }}>
                    Recommend Videos
                </Typography>
            </Box>

        </Stack>
    )
}

export default Profile