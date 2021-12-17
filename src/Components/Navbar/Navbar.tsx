import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import Logo from "../../Images/logo_face.png";
import "./navbar.css";

const pages = ["Wedding", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <img className="logoImage" src={Logo} alt="Logo" />
          </Box>

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
          <Typography
            variant="h6"
            // noWrap
            component="div"
            // sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
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
                onClick={handleOpenUserMenu}
                //   sx={{ p: 0 }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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

// // import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// // import jQuery from "jquery";
// import Logo from "../../Images/logo_face.png";
// // import "../Navbar/navbar.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "./navbar.css";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     topHeader: {
//       background: "#fff",
//       display: "flex",
//       flexDirection: "row",
//       top: 0,
//       left: 0,
//       width: "100%",
//       margin: "0 auto",
//       zIndex: 20,
//     },
//     navbar: {
//       padding: 0,
//     },
//     logo: {
//       transform: "translateX(25%)",
//     },
//   })
// );

// export default function Navbar() {
//   const classes = useStyles();
//   //   useEffect(() => {
//   //     jQuery(window).on("scroll", function () {
//   //       if (jQuery(window).scrollTop() > 50) {
//   //         jQuery(".top-header").addClass("fixed-menu");
//   //       } else {
//   //         jQuery(".top-header").removeClass("fixed-menu");
//   //       }
//   //     });
//   //   });

//   return (
//     <>
//       <header className="top-header">
//         <nav className="navbar header-nav navbar-expand-lg">
//           <a className={classes.logo} href="#home">
//             <img id="logo" src={Logo} alt="Logo" />
//           </a>
//           <div className="container">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbar-wd"
//               aria-controls="navbar-wd"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//             <div
//               className="collapse navbar-collapse justify-content-end"
//               id="navbar-wd"
//             >
//               <ul className="navbar-nav">
//                 <li>
//                   <a className="nav-link nav" href="#home">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-link" href="#about">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-link" href="#timeline">
//                     Our Story
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-link" href="#party">
//                     Party
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-link" href="#wedding">
//                     Wedding
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-link" href="#travel">
//                     Travel
//                   </a>
//                 </li>
//                 {/* <li>
//                   <a className="nav-link" href="#registry">
//                     Registry
//                   </a>
//                 </li> */}
//                 <li>
//                   <a className="nav-link" href="#faq">
//                     FAQ
//                   </a>
//                 </li>
//                 <li>
//                   <a className="nav-link" href="#contact">
//                     Contact
//                   </a>
//                 </li>
//                 {/* <li>
//                   <Link className="nav-link" to="/rsvp">
//                     RSVP
//                   </Link>
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }
