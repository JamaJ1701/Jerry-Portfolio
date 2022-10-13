import { Box } from '@mui/material';
import Header from './Header';
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: 'calc(100% - 250px)' },
          ml: { md: 'calc(250px)' }
        }}
      >
        <Outlet />
      </Box>
    </>

  );
}

export default App;
