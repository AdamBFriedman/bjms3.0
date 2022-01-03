import Box from "@material-ui/core/Box";
import Logo from "../../Images/logo_face.png";

export const Footer = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignContent={"center"}
      alignItems={"center"}
      color="white"
    >
      <img width="100" src={Logo} alt="Logo" />
      <strong>All Rights Reserved. &copy; 2021</strong>
      <img width="100" src={Logo} alt="Logo" />
    </Box>
  );
};

export default Footer;
