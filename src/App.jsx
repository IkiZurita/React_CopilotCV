import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Languages from './Languages';
import Experience from './Experience';

// 🎨 Crear un theme claro
const theme = createTheme({
  palette: {
    mode: 'light',  // Cambiamos a modo claro
    primary: {
      main: '#1976d2',  // Azul estándar de MUI
    },
    background: {
      default: '#f5f5f5',  // Gris claro para fondo
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Skills />
        <Projects />
        <Languages />
        <Experience />
      </Container>
    </ThemeProvider>
  );
}

export default App;
