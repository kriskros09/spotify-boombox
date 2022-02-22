import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1db954',
    },
    secondary: {
      main: '#212121',
    },
    error: {
      main: '#FF0000',
    },
    background: {
      default: '#fff',
      btn: '#535353',
      links: '#0000000a',
      player: '#424242',
    },
  },
  heading: {
    font: {
      h1: '7.2rem',
      h2: '3.2rem',
      h3: '1.313rem',
    },
  },
});

export default theme;
