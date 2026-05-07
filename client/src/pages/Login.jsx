import React from 'react';
import { Stack, Paper, Box, Button, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Stack sx={{ height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={3} sx={{
                display: "flex",
                flexDirection: "column",
                p: "30px",
                borderRadius: "10px",
                border: "2px solid rgba(210, 214, 227, 0.2)",
                boxShadow: '0px 0px 40px rgba(210, 214, 227, 0.2)',
                width: "100%",
                maxWidth: "400px",
                gap: 2 
            }}>
                <Typography variant='h4' textalign="center" gutterBottom sx={{
                    color: "text.primary"
                }}>Log in</Typography>

                <TextField label="Name" variant="outlined" fullWidth />
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField label="Password" type="password" variant="outlined" fullWidth />

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button to="/register" component={Link} sx={{
                        bgcolor:"#6594B1",
                        color: "white"
                    }}>
                        signup
                    </Button>
                    <Button to="/profile" component={Link} sx={{
                        bgcolor: "#6594B1",
                        color:"white"
                    }}>
                        login
                    </Button>
                </Box>
            </Paper>
        </Stack>
    );
}

export default Login;