import { Box, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";


export default function Mobileview() {
    const iconstyle = {
        color: "#F2F4F6", 
        marginTop: "2%",
    };
    const fire = {
       width: "108px",
       height: "45px",
       color: "#F2F4F6",
       borderRadius: "40px",
       backgroundColor: "#00B7A8",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
    };
  return (
    <Box sx={{
        width: "358px",
        height: "69px",
        backgroundColor: "#0C084C",
        borderRadius: "40px",
    }}>
      <ListItem sx={{
        
        
      }}>
         <ListItemIcon sx={iconstyle}><HomeOutlinedIcon /></ListItemIcon>
         <ListItemIcon sx={iconstyle}><TrackChangesIcon /></ListItemIcon>
         <ListItemIcon sx={{...iconstyle, ...fire ,  display: "flex",
         justifyContent: "center",
         alignItems: "center"}}><ListItem sx={{justifyContent: "spaceBetween"}}>
               <LocalFireDepartmentOutlinedIcon /><ListItemText>Actions</ListItemText>
            </ListItem></ListItemIcon>
         <ListItemIcon sx={{...iconstyle, marginLeft: "20px"}}><ChatBubbleOutlineOutlinedIcon /></ListItemIcon>
         <ListItemIcon sx={iconstyle}><NotificationsNoneOutlinedIcon /></ListItemIcon>
      </ListItem>
    </Box>
  )
}
