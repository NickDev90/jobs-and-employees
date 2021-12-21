import Jobs from "./Components/Jobs/Jobs";
import Employees from "./Components/Employees/Employees";
import ResponsiveDrawer from './Components/Common/ResponsiveDrawer.jsx';
import { Box, Toolbar } from "@mui/material";


function App() {

  return (
    
    <Box sx={{ display: 'flex' }}>
      <Jobs/>
      <Box component='main' sx={{flexGrow: 1, padding: 2}}>
        <Toolbar/>  
        <Employees/>
      </Box>
      
    </Box>

  );
}

export default App;
