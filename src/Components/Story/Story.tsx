import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import StoryBackground from "../../Images/story_background.png";

const useStyles = makeStyles((theme) => ({
  storyWrapper: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
  },
  left: {
    backgroundColor: "red",
    width: "50%",
  },
  storyBox: {
    backgroundImage: `url(${StoryBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: `5em solid ${theme.palette.secondary.main}`,
    width: "50%",
  },
  right: {
    backgroundColor: "blue",
    width: "50%",
  },
}));

export const Story = () => {
  const classes = useStyles();

  return (
    <Box className={classes.storyWrapper}>
      <Box className={classes.storyBox} />
      <Box className={classes.right}>
        <Box paddingTop="10vh">
          <h1>Right Content</h1>
          <p>Add Content Here</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Story;
