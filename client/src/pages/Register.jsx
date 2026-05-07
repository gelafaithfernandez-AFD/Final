import React from 'react';
import {
    Stack,
    Paper,
    Box,
    Button,
    Typography,
    TextField
} from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <Stack sx={{
            height: "80vh",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Paper sx={{
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
                <Typography variant='h4' textAlign="center" sx={{ mb: 1 }}>
                    Signup
                </Typography>

                {/* Switched to TextField for better MUI compatibility */}
                <TextField label="Fullname" variant="outlined" fullWidth />
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField label="Password" type="password" variant="outlined" fullWidth />

                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: "10px",
                    width: "100%"
                }}>
                    <Button
                        to="/profile"
                        component={Link}
                        sx={{
                            // Use Hex codes to avoid the "Unsupported white" error
                            color: "#ffffff",
                            border: "1px solid #ffffff",
                            '&:hover': {
                                border: "1px solid #ffffff",
                                bgcolor: "rgba(255, 255, 255, 0.08)"
                            }
                        }}
                    >
                        Signin
                    </Button>
                </Box>
            </Paper>
        </Stack>
    );
}

export default Register;