import Box from "@material-ui/core/Box";

export const Footer = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      color="white"
    >
      <strong>This will be the footer</strong>
      <strong>This will be the footer</strong>
      <strong>This will be the footer</strong>
    </Box>
  );
};

export default Footer;
