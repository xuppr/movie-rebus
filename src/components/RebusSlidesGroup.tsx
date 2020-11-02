import React, { useState, useContext, useRef } from "react";
import { IonSlides } from "@ionic/react";
import RebusSlide from "./RebusSlide";

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

  const pub: any = useRef();
  const rebusBlur = () => {
    pub.current!.rebusBlur();
  };

  return (
    <IonSlides
      pager={false}
      options={slideOpts}
      onIonSlideDidChange={rebusBlur}
    >
      {currentLevel.map((item: any, index: number) => (
        <RebusSlide
          ref={pub}
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
