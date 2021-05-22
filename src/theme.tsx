import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FDF6EA',
        },
        info: {
            main: '#FDF6EA'
        },
        text: {
            primary: '#DBB46A',
        }
    },
    typography: {
        fontFamily: '"Poppins"',
        h4: {
            fontWeight: 600,
            fontSize: '18px'
        }
    }
})