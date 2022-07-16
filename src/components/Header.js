
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink} from 'react-router-dom';
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import React, { Suspense } from 'react'


function Header() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Button sx={{ color: 'white' }} component={RouterLink} to="/">
                        {t("HOME")}
                    </Button>
                    <Button sx={{ color: 'white'}} component={RouterLink} to="/about">
                        {t("ABOUT")}
                    </Button>
                    <Box marginLeft={"100px"}>
                        <Button id="fi" onClick={() => changeLanguage("fi")} sx={{ color: 'white' }}>FI</Button>
                        <Button id="en" onClick={() => changeLanguage("en")} sx={{ color: 'white' }}>EN</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div >
    )
}

//export default Header


export default function App() {
    return (
        <Suspense fallback="loading">
            <Header />
        </Suspense>
    )

}

