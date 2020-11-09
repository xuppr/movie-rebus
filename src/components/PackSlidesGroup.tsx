import React, { useContext } from "react";
import { IonSlides } from "@ionic/react";
import PackSlide from "./PackSlide";
import PackPurchaseSlide from "./PackPurchaseSlide";
import "../styles/PackSlidesGroup.css";
import { RebusContext } from "../RebusContext";
import { PackStatus } from "../interfaces";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const PackSlidesGroup = () => {
  const { packs } = useContext(RebusContext);
  const packNames = Object.keys(packs);

  return (
    <IonSlides pager={false} options={slideOpts}>
      {packNames.map((name) => {
        if (packs[name].status === PackStatus.Available) {
          const unlocked = packs[name].unlockedLevels;
          return (
            <PackSlide
              unlockedLevels={unlocked}
              key={name + "id"}
              packName={name}
            />
          );
        } else {
          return <PackPurchaseSlide key={name + "id"} packName={name} />;
        }
      })}
    </IonSlides>
  );
};

export default PackSlidesGroup;
