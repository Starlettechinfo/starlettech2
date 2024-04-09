import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Blog▽", link: "/blog" },
  { text: "Contact", link: "/contact" },
];

const Navbar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={"/"}>
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ padding: "1rem" }}
          />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary={item.text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#808080" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>
              <img
                src={logo}
                alt="Logo"
                className="logo"
                style={{ width: "4.5rem", padding: '1rem 0 0 0' }}
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.text} sx={{ color: "black" }}>
                <Link
                  to={item.link}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "1rem",
                  }}
                >
                  {item.text}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: { md: 1, xs: 0 } }}>
        <Toolbar />
        <Typography />
      </Box>
    </Box>
  );
};

export default Navbar;
