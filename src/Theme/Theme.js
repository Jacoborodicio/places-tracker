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
        }
    },
    light: {
        palette: {
            primary: {
                main: '#b7e4c7',
                light: '#d8f3dc',
                dark: '#95d5b2'},
            secondary: {
                main: '#1b4332',
                light: '#2d6a4f',
                dark: '#081c15',
            },
        },
        text: {
            primary: '#2f3e46',
            secondary: '#1a936f'
        }
    }
};

export const createCustomTheme = (name) => createTheme(themes[name]);
