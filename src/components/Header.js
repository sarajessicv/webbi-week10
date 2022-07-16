
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Button from '@mui/material/Button';



function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Button sx={{color:'white'}} component={RouterLink} to="/">
                        HOME
                    </Button>
                    <Button sx={{color:'white'}} component={RouterLink} to="/about">
                        ABOUT
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
