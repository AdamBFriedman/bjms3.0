import Faq from "react-faq-component";

const styles = {
  bgColor: "white",
  titleTextColor: "#820CCB",
  rowTitleColor: "#820CCB",
  rowContentColor: "#2FCB00",
  arrowColor: "#820CCB",
  rowContentPaddingLeft: "1em",
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
  ],
};

const faqConfig = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export const FAQ = () => {
  return (
    <div>
      <Faq styles={styles} data={faqData} config={faqConfig} />
    </div>
  );
};

export default FAQ;
