import React, { useState, useContext } from "react";
import { IonSlides } from "@ionic/react";
import RebusSlide from "./RebusSlide";

import { RebusSlidesData } from "../interfaces";

import "../styles/RebusSlidesGroup.css";
import { RebusContext } from "../RebusContext";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 300,
  preloadImages: true,
};

const RebusSlidesGroup: React.FC<{
  selectedPack: string;
  selectedLevel: string;
}> = (props) => {
  const { currentLevel, rebusDispatch } = useContext(RebusContext);

  return (
    <IonSlides pager={false} options={slideOpts}>
      {currentLevel.map((item: any, index: number) => (
        <RebusSlide
          packName={props.selectedPack}
          level={props.selectedLevel}
          index={index}
          key={`rbs${item.title}`}
          title={item.title}
          image={item.imgUrl}
          solved={item.solved}
          rebusDispatch={rebusDispatch}
        />
      ))}
    </IonSlides>
  );
};

export default RebusSlidesGroup;
