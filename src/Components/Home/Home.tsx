import { Box, Typography } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import { SwingingFrame } from "../SwingingFrame/SwingingFrame";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        id="home"
        width="100vw"
        height="100vh"
        paddingTop="10vh"
        border="1px solid red"
      >
        <Typography variant="h1" component="h1">
          Home
        </Typography>
        <SwingingFrame />
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
