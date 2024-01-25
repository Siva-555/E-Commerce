import React from "react";
import { Box, AppBar, Toolbar, Button, Badge, IconButton } from "@mui/material";
import { ShoppingBag } from "lucide-react";

import FavoriteIcon from "@mui/icons-material/Favorite";

import shopinglogo from "../../assets/shoping-logo.gif";
import "./Header.css";

function Header() {
  return (
    <Box sx={{ flexGrow: 1, minWidth: "100vh" }}>
      <AppBar id="header-appbar">
        <Toolbar>
          <img src={shopinglogo} alt="" height="60px" className="header-logo" />
          <div className="header-text">SwiftCart</div>
          <div className="header-items">
            <div className="hd-button-grp">
              <Button color="secondary" sx={{ mr: 2 }}>
                Men
              </Button>
              <Button color="secondary" sx={{ mr: 2 }}>
                Women
              </Button>
              <Button color="secondary" sx={{ mr: 2 }}>
                Appliances
              </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ mr: 2, width: "120px" }}
              >
                Shop ALL
              </Button>
            </div>
            <div>
              <Box sx={{ mr: 3 }}>
                <IconButton color="secondary">
                  <Badge sx={{ fontSize: 30 }} badgeContent={4} color="info">
                    <FavoriteIcon color="secondary" fontSize="inherit" />
                  </Badge>
                </IconButton>
              </Box>
            </div>
            <Box sx={{ mr: 4 }}>
              <IconButton color="secondary">
                <Badge badgeContent={4} color="info">
                  <ShoppingBag />
                </Badge>
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
