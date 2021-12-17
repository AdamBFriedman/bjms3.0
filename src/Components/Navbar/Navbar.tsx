import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Link,
  Container,
  Tooltip,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import BookNow from "../../Images/booknow.png";
import "./navbar.css";

const pages = ["Wedding", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleBookNow = () => {
    alert("Book with BJMS! Coming soon!");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        width: "100vw",

        overflow: "hidden",
        backgroundColor: "#333",
        position: "fixed" /* Set the navbar to fixed position */,
        top: 0 /* Position the navbar at the top of the page */,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              //   size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              //   sx={{
              //     display: { xs: 'block', md: 'none' },
              //   }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                  //   textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            <Link
              // onClick={handleCloseNavMenu}
              className="nav-link nav active"
              href={"#home"}
            >
              Home
            </Link>

            <Link
              // onClick={handleCloseNavMenu}
              className="nav-link nav"
              href={"#story"}
            >
              Story
            </Link>

            <Link
              // onClick={handleCloseNavMenu}
              className="nav-link nav"
              href={"#private"}
            >
              Private Parties
            </Link>

            <Link
              // onClick={handleCloseNavMenu}
              className="nav-link nav"
              href={"#school"}
            >
              Schools/Camps
            </Link>

            <Link
              // onClick={handleCloseNavMenu}
              className="nav-link nav"
              href={"#corporate"}
            >
              Corporate
            </Link>

            <Link
              // onClick={handleCloseNavMenu}
              className="nav-link nav"
              href={"#virtual"}
            >
              Virtual Magic
            </Link>

            <Link
              // onClick={handleCloseNavMenu}
              className="nav-link nav"
              href={"#faq"}
            >
              FAQ
            </Link>
            {/* {pages.map((page) => (
              <Link
                key={page}
                // onClick={handleCloseNavMenu}
                className="nav-link nav"
                href={"#contact"}
              >
                {page}
              </Link>
              //   <Button
              //     key={page}
              //     onClick={handleCloseNavMenu}
              //     // sx={{ my: 2, color: 'white', display: 'block' }}
              //   >
              //     {page}
              //   </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleBookNow}
                //   sx={{ p: 0 }}
              >
                <img className="logoImage" src={BookNow} alt="Logo" />
              </IconButton>
            </Tooltip>
            <Menu
              //   sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography
                  //   textAlign="center"
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
