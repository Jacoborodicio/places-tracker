import {createTheme} from "@mui/material";

const themes = {
    dark: {
        palette: {
            primary: {
                main: '#222831',
                light: '#222831',
                dark: '#222831'},
            secondary: {
                main: '#393E46',
                light: '#393E46',
                dark: '#393E46',
            },
        },
        text: {
            primary: '#D7E4D4',
            secondary: '#90DCB3'
        },
        typography: {
            fontFamily: `"Raleway","Roboto", "Arial", sans-serif`,
            h1: {
                color: '#90DCB3'
            },
            body1: {
                color: '#D7E4D4',
                fontSize: '.875rem' // 14px from base 16px
            }
        },
        margins: {
            global: '1.5rem',
        }
    },
    light: {
        palette: {
            primary: {
                main: '#DEF2F1',
                light: '#FEFFFF',
                dark: '#3AAFA9'},
            secondary: {
                main: '#2B7A78',
                light: '#3AAFA9',
                dark: '#17252A',
            },
        },
        text: {
            primary: '#17252A',
            secondary: '#DEF2F1'
        },
        typography: {
            fontFamily: `"Raleway","Roboto", "Arial", sans-serif`,
            h1: {
                color: '#2d6a4f',

            },
            body1: {
                color: '#081c15',
                fontSize: '.875rem' // 14px from base 16px
            }
        }
    }
};

export const createCustomTheme = (name) => createTheme(themes[name]);
