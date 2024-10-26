import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/NavBar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from './SnackbarContext';

export default function Navbar() {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [isManager, setIsManager] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setIsManager(JSON.parse(localStorage.getItem('user')).isManager);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/login');
    showSnackbar("Logged out successfully", "success");
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  className='navbar-container' position="static" sx={{ backgroundColor: '#7E60BF', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Toolbar>
          {isManager && (<a href='/app/all-items'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              All Items
            </Typography>
          </a>)}

          {isManager || (<a href='/app/generate-bill'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Billing
            </Typography>
          </a>)}


          <a href='/app/about'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              About
            </Typography>
          </a>
          {/* <a href='/'>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact Us
        </Typography>
        </a> */}

        </Toolbar>
        <IconButton className='logout-btn' onClick={logoutHandler}>
          <LogoutIcon />
        </IconButton>
      </AppBar>
    </Box>
  )
}
