import Box from "@material-ui/core/Box";
import Faq from "react-faq-component";

const primaryMain = "#820CCB";
const secondaryMain = "#2FCB00";

const styles = {
  bgColor: "white",
  titleTextColor: primaryMain,
  rowTitleColor: primaryMain,
  rowContentColor: secondaryMain,
  arrowColor: primaryMain,
  // rowContentPaddingLeft: "1em",
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 11);
};

const faqData = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "Who is BigJoeyMagicShowy?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "How do I book a show?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Would you like to touch my balls?",
      content: `Yes.`,
    },
    {
      title: "I'm thinking of a number between 1 and 10...",
      content: getRandomNumber(),
    },
  ],
};

const faqConfig = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export const FAQ = () => {
  return (
    <Box>
      <Faq styles={styles} data={faqData} config={faqConfig} />
    </Box>
  );
};

export default FAQ;
