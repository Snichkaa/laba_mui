import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import {Link} from 'react-router-dom';

interface ComponentProps {
 active: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
    backgroundColor: '#fff5f7', 
}));

const StyledMenuItem = styled(MenuItem)(() => ({
    ':hover': {
        backgroundColor: '#ff80ab', 
    },
}));


function Navbar({ active } : ComponentProps) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <AppBar position="static"
            sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#d81b60' }}>
                        Самые редкие виды растений
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/">
                            <Button 
                                variant={active === "1" ? "contained" : "text"}  
                                sx={{
                                    color: active === "1" ? '#fff' : '#e91e63',
                                    backgroundColor: active === "1" ? '#e91e63' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#f06292'
                                    }
                                }} 
                                size="medium"
                            >
                                Главная
                            </Button>
                        </Link>
                        <Link to="/list">
                            <Button 
                                variant={active === "2" ? "contained" : "text"} 
                                sx={{
                                    color: active === "2" ? '#fff' : '#e91e63',
                                    backgroundColor: active === "2" ? '#e91e63' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#f06292'
                                    }
                                }}
                                size="medium"
                            >
                                Список растений
                            </Button>
                        </Link>
                        <Link to="/chart">
                            <Button 
                                variant={active === "3" ? "contained" : "text"} 
                                sx={{
                                    color: active === "3" ? '#fff' : '#e91e63',
                                    backgroundColor: active === "3" ? '#e91e63' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#f06292'
                                    }
                                }}
                                size="medium"
                            >
                                Диаграммы
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)} sx={{ color: '#e91e63' }}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={ open }
                            onClose={toggleDrawer(false)}
                        >
                            <Box>
                                <Box
                                    sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    }}
                                >
                                <IconButton onClick={toggleDrawer(false)} sx={{ color: '#e91e63' }}>
                                    <CloseRoundedIcon/>
                                </IconButton>
                            </Box>
                                <Link to="/">
                                    <StyledMenuItem selected={active === "1"}>Главная </StyledMenuItem>
                                </Link>
                                <Link to="/list">
                                    <StyledMenuItem>Список растений</StyledMenuItem>
                                </Link>
                                <Link to="/chart"> 
                                    <StyledMenuItem>Диаграммы</StyledMenuItem> 
                                </Link>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;