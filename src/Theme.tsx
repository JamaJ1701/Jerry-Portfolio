// This is the theme file for the portfolio website.
// Generated using the MUI Theme maker

import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    typography:{
        h3:{
            color: "#523f90",
            fontWeight: 700,
            fontSize: "2rem"
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#523f90',
            light: '#6667AB',
        },
        secondary: {
            main: '#fb5d45',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7382ff',
            light: '#9ea9ff',
        },
        secondary: {
            main: '#fb5d45',
        },
    },
});
