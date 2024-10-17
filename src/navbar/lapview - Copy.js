import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import logo from '../assets/logo.png';
import Mobileview from './Mobileview'; 

const Lapview = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const Items = [
    { id: "actions", icon: <LocalFireDepartmentOutlinedIcon />, text: "Actions" },
    { id: "goals", icon: <TrackChangesIcon />, text: "Goals" },
    { id: "docs", icon: <InsertDriveFileOutlinedIcon />, text: "Docs" },
    { id: "canvas", icon: <LocalFireDepartmentOutlinedIcon />, text: "Canvas" },
    { id: "culture", icon: <LocalFireDepartmentOutlinedIcon />, text: "Culture" },
    { id: "scan", icon: <ChatBubbleOutlineOutlinedIcon />, text: "Chat" },
  ];

  const IconBox = {
    width: "35px",
    height: "35px",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF29",
    color: "#F2F4F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-5px",
  };

  const icons = {
    width: "20px",
    height: "20px",
    color: "#F2F4F6",
    opacity: "1",
    justifyContent: "center",
  };


  return (
    <Box className="App">
      {isMobile ? (
        <Mobileview />
      ) : (
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              backgroundColor: "#0C084C",
              width: "64px",
              height: "768px",
            },
          }}
        >
          <List>
            <img src={logo} alt="Logo" style={{ width: '40px', height: 'auto', background: "#0C084C" }} />
          </List>
          <List sx={{ marginTop: '20%' }}>
            {Items.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ListItem sx={IconBox}>
                  <ListItemIcon sx={icons}>{item.icon}</ListItemIcon>
                </ListItem>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: "white",
                    "& .MuiTypography-root": {
                      fontSize: "10px",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
          <List sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30%"
          }}>
            <ListItem sx={IconBox}>
              <SettingsIcon />
            </ListItem>
            <ListItemText sx={{
              color: "#F2F4F6",
              "& .MuiTypography-root": {
                fontSize: "10px",
              },
            }}>Settings</ListItemText>
          </List>
        </Drawer>
      )}
    </Box>
  );
};

export default Lapview;
