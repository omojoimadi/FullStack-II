import { Grid } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{ padding: 4 }}
    >
      <Grid item>
        <Home />
      </Grid>

      <Grid item>
        <About />
      </Grid>

      <Grid item>
        <Contact />
      </Grid>
    </Grid>
  );
}

export default App;
