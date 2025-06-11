import React from "react";
import {
  AppBar,
  Box,
  Typography,
  Button,
  Toolbar,
  IconButton,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";

function Header() {
  return (
    <>
      <Box >
        <AppBar component={'nav'} sx={{bgcolor:'black'}}>
          <Toolbar>
       
           
          
            <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <FastfoodIcon />   My Resturent
            </Typography>
       
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
