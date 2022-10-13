import './css/App.css';
import { Box } from '@mui/material';

type Props = {
  children: JSX.Element;
}
function App(props: Props) {

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: { md: 'calc(100% - 250px)' },
        ml: { md: 'calc(250px)' }
      }}
    >
      {props.children}
    </Box>
  );
}

export default App;
