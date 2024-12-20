import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Card from "./card";

const Work = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Card data
  const cards = [
    {
      id: 1,
      title: "AgroFind",
      description:
        "AgroFind is an AI incorporated chat bot created to aid in the identification of plants, noticable disease and/or pest infestation. Built with Gemini AI, it takes the user input with has to be a picture with jpg, jpeg or png extension/format. It then gives the user the summary of noticable features about the plant.",
      bgColor: "bg-red-400",
    },
    {
      id: 2,
      title: "Voterz",
      description:
        "Voterz is an online voting platform made to efficiently handle intra-business elections eg elections for a post in a school organisation. It makes a better alternative to voting in person and then eases the stress of currating reults after the voting process. Voterz is made to make election seamless and user friendly. If election process is less tedious, more people would want to partake reducing political apathy even in our organizations. There would be no issue of cheating or foul play since all voting process would be done with the web app and gives the result.",
      bgColor: "bg-blue-400",
    },
    {
      id: 3,
      title: "KidsFlix",
      description:
        "KidsFlix is a web app for recommending movies specifically safe for kids. An alternative to Netflix but for kids. User can use the page and is only prompted to sign up when he wishes to add movies to favourites so he could come back to them later.",
      bgColor: "bg-yellow-400",
    },
  ];

  // Dynamic transformations for stacking effect
  const translateYs = [
    useTransform(scrollYProgress, [0, 0.33], [0, -50]),
    useTransform(scrollYProgress, [0.33, 0.66], [0, -50]),
    useTransform(scrollYProgress, [0.66, 1], [0, -50]),
  ];
  const zIndexes = [
    useTransform(scrollYProgress, [0, 0.33], [3, 1]),
    useTransform(scrollYProgress, [0.33, 0.66], [3, 1]),
    useTransform(scrollYProgress, [0.66, 1], [3, 4]),
  ];

  return (
    <div ref={targetRef} className="space-y-12 px-6 py-12 relative">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor}
          translateY={translateYs[index]}
          zIndex={zIndexes[index]}
          isRight={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Work;
