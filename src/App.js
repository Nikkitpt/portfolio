import './App.css';
import {Hero} from "./components/Hero";
import {Projects} from "./components/Projects";

import { Grid2 } from '@mui/material';

const App = () => 
    <Grid2 container sx={{ 
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Hero/>
      <Projects/>
    </Grid2>

export default App;