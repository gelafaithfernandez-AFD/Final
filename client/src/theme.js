import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        mode: 'dark', // or 'light'
        primary: { main: '#213C51',
         },
        secondary: { main: '#DDAED3' },
        background: {
            default: '#6594B1',
            paper: '#213C51',
            
        },
        typography: {
            fontFamily: '"Inter", "Roboto", sans-serif',
            h4: { fontWeight: 700 },
            h5: { fontWeight: 600 },
            h6: { fontWeight: 600 },
            span: { fontWeight: 700 },
            button: { textTransform: 'none' },
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#9094a2',
        },


    },
});

export default theme;