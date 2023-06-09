import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    background: {
      default: '#1A1A1A',
      paper: '#202020',
    },
    primary: {
      main: '#3A3AF4',
    },
    secondary: {
      main: '#303030',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
      fontFamily: 'Source Sans Pro, sans-serif',
    },
  },
});

export default Theme;
