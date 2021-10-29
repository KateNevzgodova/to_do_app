import { AppBar, Typography  } from '@mui/material';
import Filters from './components/Filters';

function App() {


  return (
    <div className="App">
        <AppBar position="static">
          <Typography align='center' variant='h4'> To do App</Typography>
        </AppBar>
        <Filters />
        
    </div>
  );
}

export default App;
