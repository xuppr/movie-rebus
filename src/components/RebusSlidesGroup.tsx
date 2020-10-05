import React, { useState } from "react";
import { IonSlides } from "@ionic/react";
import RebusSlide from "./RebusSlide";

import { RebusSlidesData } from "../interfaces";

import "./RebusSlidesGroup.css";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 300,
  preloadImages: true,
};

const RebusSlidesGroup: React.FC<{
  slidesData: RebusSlidesData;
  selectedLevel: number;
  handleSolved: (title: string) => void;
}> = (props) => {
  const level1 = props.slidesData.levels.level1;
  const titles = Object.keys(level1);

  const [currentLevel, setCurrentLevel] = useState(props.selectedLevel);

  return (
    <IonSlides pager={false} options={slideOpts}>
      {titles.map((key) => (
        <RebusSlide
          key={`rbs${key}`}
          title={key}
          image={level1[key].imgUrl}
          solved={level1[key].solved}
          handleSolved={props.handleSolved}
        />
      ))}
    </IonSlides>
  );
};

export default RebusSlidesGroup;
