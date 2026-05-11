import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#213C51' },
        secondary: { main: '#d2d6e3' },
        background: {
            default: '#6594B1',
            paper: '#213C51',
        },
        text: {
            primary: '#d2d6e3',
            secondary: '#d2d6e3',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;