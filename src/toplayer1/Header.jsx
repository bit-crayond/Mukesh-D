import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Avatar, Badge, Menu, MenuItem, Box } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon, Notifications as NotificationsIcon, ArrowDropDown as ArrowDropDownIcon, CardGiftcard as GiftIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.8),
  border: '1px solid #ccc',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  flexGrow: 1,
  maxWidth: '500px',
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
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const addButtonRef = useRef(null); // Reference to track the Add New button width

  // Handle menu for profile
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle dropdown menu for Add New
  const handleDropdownClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: '#fff', color: '#000', width: '100%' }}>
        <Toolbar>
          {/* Spacer with 65px width before "Actions" */}
          <div style={{ width: '65px' }} />

          {/* Left Section (Actions and Badge) */}
          <Typography variant="h6" noWrap>
            Actions
          </Typography>

          {/* Badge "16" */}
          <div
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '50%',
              marginLeft: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35px',
              height: '35px',
            }}
          >
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>16</Typography>
          </div>

          {/* Spacer with 360px width */}
          <div style={{ width: '360px' }} />

          {/* Centered Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Spacer with 190px width */}
          <div style={{ width: '190px' }} />

          {/* Right Section (Add New, Gift Icon, Notifications, Avatar) */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Add New Button (always in box) */}
            <Box
              ref={addButtonRef} // Track the width of this Box
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 10px',
                borderRadius: '5px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ccc',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <IconButton
                color="inherit"
                onClick={handleDropdownClick}
                style={{ padding: 0, borderRadius: '5px', backgroundColor: 'transparent' }} // Remove hover effect
                disableRipple // Disable ripple effect on click
                disableFocusRipple // Disable focus ripple effect on click
              >
                <AddIcon />
                <Typography variant="button" style={{ marginLeft: 5 }}>Add New</Typography>
                <ArrowDropDownIcon />
              </IconButton>
            </Box>

            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleDropdownClose}
              PaperProps={{
                style: {
                  width: addButtonRef.current ? addButtonRef.current.offsetWidth : 'auto', // Match button width
                },
              }}
              MenuListProps={{
                disablePadding: true,
              }}
            >
              <MenuItem onClick={handleDropdownClose}>Option 1</MenuItem>
              <MenuItem onClick={handleDropdownClose}>Option 2</MenuItem>
              <MenuItem onClick={handleDropdownClose}>Option 3</MenuItem>
            </Menu>

            {/* Gift Icon */}
            <IconButton color="inherit">
              <GiftIcon />
            </IconButton>

            {/* Notification icon */}
            <IconButton color="inherit">
              <Badge color="secondary" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* Profile avatar */}
            <IconButton color="inherit" onClick={handleMenu}>
              <Avatar src="/static/images/avatar/1.jpg" alt="profile picture" />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {/* Add a placeholder div below AppBar to prevent content overlap */}
      <div style={{ height: '64px' }} />
    </>
  );
}
