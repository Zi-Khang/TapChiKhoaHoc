import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import EditIcon from '@mui/icons-material/Edit';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import { DropdownMenu } from '../commons/DropdownMenu';
import { useMemo } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      sx={{
      }}
      anchorOrigin={{
        vertical: 'right',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'right',
        horizontal: 'top',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Bản early</MenuItem>
      <MenuItem onClick={handleMenuClose}>Thông báo và nội dung liên quan</MenuItem>
    </Menu>
  );

  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  }, []);

  console.log(user?.isLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <Box sx={{ display: 'flex', gap: 2 }}>
          <NewspaperIcon sx={{ marginTop: 0.5}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TẠP CHÍ KHOA HỌC
          </Typography>
            
            <Button variant="contained" startIcon={<EditIcon />}>
              <Link className="nav-link" to={{ pathname: "/Tacgia" }}>
                Tác giả
              </Link>
            </Button>
            <Button variant="contained" startIcon={<RecordVoiceOverIcon />}>
            <Link className="nav-link" to={{ pathname: "/" }}>
                Phản biện
              </Link>
            </Button>
            <Button variant="contained" startIcon={<DescriptionIcon />}>
              <Link className="nav-link" to={{ pathname: "/" }}>
                Tạp chí
              </Link>
            </Button>
            <Button 
              onClick={handleProfileMenuOpen}
              variant="contained" 
              startIcon={<VisibilityIcon />
                
            }>
              <Link className="nav-link" to={{ pathname: "/" }}>
                Xem
              </Link> 
            </Button>
            </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 2
              }}>
                {user?.isLoggedIn ? (
                <DropdownMenu />
                ) : (
                  <Link className="link-user-login" to={{ pathname: "/login" }}>
                    <Button variant="contained"><Typography variant='subtitle1'> Login </Typography></Button>    
                  </Link>
                )}
                
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}