import { Box, Typography } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import { SwingingFrame } from "../SwingingFrame/SwingingFrame";
import HomeCenterContent from "../HomeCenterContent/HomeCenterContent";
import { makeStyles } from "@material-ui/core/styles";
import suit from "../../Images/suit.jpg";

const useStyles = makeStyles((theme) => ({
  "@keyframes jump": {
    "0%": {
      transform: "translateY(0px) rotate(0deg)",
    },
    "40%": {
      transform: "translateY(0px) rotate(0deg)",
    },
    "50%": {
      transform: "translateY(-100px) rotate(180deg)",
    },
    "60%": {
      transform: "translateY(0px) rotate(360deg)",
    },
    "100%": {
      transform: "translateY(0px) rotate(360deg)",
    },
  },
  "@keyframes swirl-in": {
    "0%": {
      WebkitTransform: "rotate(-540deg) scale(0)",
      transform: "rotate(-540deg) scale(0)",
      opacity: 0,
    },
    "100%:": {
      WebkitTransform: "rotate(0) scale(1)",
      transform: "rotate(0) scale(1)",
      opacity: 1,
    },
  },
  homeWrapper: {
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundImage: `url(${suit})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "center",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundPosition: "center",
      overflowY: "scroll",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box
        id="home"
        width="100vw"
        height="100vh"
        paddingTop="10vh"
        className={classes.homeWrapper}
      >
        <Typography variant="h1" component="h1">
          Home
        </Typography>
        <SwingingFrame />
        <HomeCenterContent />
      </Box>
      <Box
        id="story"
        width="100vw"
        height="100vh"
        paddingTop="10vh"
        border="1px solid blue"
      >
        <Typography variant="h1" component="h1">
          Story
        </Typography>
      </Box>
      <Box
        id="private"
        width="100vw"
        height="100vh"
        paddingTop="10vh"
        border="1px solid green"
      >
        <Typography variant="h1" component="h1">
          Private Parties
        </Typography>
      </Box>
      <Box
        id="school"
        width="100vw"
        height="100vh"
        paddingTop="10vh"
        border="1px solid yellow"
      >
        <Typography variant="h1" component="h1">
          Schools/Camps
        </Typography>
      </Box>
      <Box
        id="corporate"
        width="100vw"
        height="100vh"
        paddingTop="10vh"
        border="1px solid purple"
      >
        <Typography variant="h1" component="h1">
          Corporate
        </Typography>
      </Box>
      <Box
        id="virtual"
        width="100vw"
        height="100vh"
        paddingTop="10vh"
        border="1px solid orange"
      >
        <Typography variant="h1" component="h1">
          Virtual Magic
        </Typography>
      </Box>
      <Box
        id="faq"
        width="100vw"
        height="100vh"
        paddingTop="10vh"
        border="1px solid red"
      >
        <Typography variant="h1" component="h1">
          FAQ
        </Typography>
      </Box>
    </>
  );
}
