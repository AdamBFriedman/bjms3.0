import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Link,
  Container,
  Tooltip,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import BookNow from "../../Images/booknow.png";
import "./navbar.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary.main,
    borderTop: `10px solid ${theme.palette.secondary.main}`,
    borderBottom: `10px solid ${theme.palette.secondary.main}`,
    width: "100vw",
    overflow: "hidden",
    position: "fixed",
    top: 0,
  },
  navLink: {
    color: "#fff",
    fontSize: theme.spacing(3),
  },
}));

const pages = [
  "Home",
  "Story",
  "Private Parties",
  "Schools/Camps",
  "Corporate",
  "Virtual Magic",
  "FAQ",
];

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleBookNow = () => {
    alert("Book with BJMS! Coming soon!");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={classes.appbar}>
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
                  <Link
                    className="nav-link"
                    href={
                      page === "Private Parties"
                        ? "#private"
                        : page === "Virtual Magic"
                        ? "#virtual"
                        : page === "Schools/Camps"
                        ? "#school"
                        : `#${page.toLowerCase()}`
                    }
                  >
                    {page}
                  </Link>
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
            {pages.map((page) => (
              <Link
                key={page}
                className={classes.navLink}
                href={
                  page === "Private Parties"
                    ? "#private"
                    : page === "Virtual Magic"
                    ? "#virtual"
                    : page === "Schools/Camps"
                    ? "#school"
                    : `#${page.toLowerCase()}`
                }
              >
                {page}
              </Link>
            ))}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
