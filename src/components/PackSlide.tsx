import React from "react";
import { IonSlide, IonGrid, IonRow, IonCol } from "@ionic/react";
import LeveCard from "./LevelCard";
import LevelCard from "./LevelCard";

import "../styles/PackSlideStyle.css";

const PackSlide: React.FC<{ packName: string; unlockedLevels: number }> = (
  props
) => {
  const levelIconsPath = "/assets/level-icons/";

  return (
    <IonSlide style={{ display: "block" }}>
      {/* <div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className="ion-text-center">
                <h1>{props.packName}</h1>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div> */}
      {/* <div style={{ display: "flex", height: "100%" }}> */}
      <IonGrid className="pack-slide-grid">
        <IonRow>
          <IonCol>
            <h1 className="ion-text-center">{props.packName}</h1>
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol sizeXs="4">
            <LeveCard
              pack={props.packName}
              level="1"
              active={true}
              imgUrl={levelIconsPath + "sofa.svg"}
            />
          </IonCol>
          <IonCol sizeXs="4">
            <LeveCard
              pack={props.packName}
              level="2"
              active={2 <= props.unlockedLevels}
              imgUrl={levelIconsPath + "popcorn.svg"}
            />
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol sizeXs="4">
            <LevelCard
              pack={props.packName}
              level="3"
              active={3 <= props.unlockedLevels}
              imgUrl={levelIconsPath + "hipster.svg"}
            />
          </IonCol>
          <IonCol sizeXs="4">
            <LevelCard
              pack={props.packName}
              level="4"
              active={4 <= props.unlockedLevels}
              imgUrl={levelIconsPath + "clapperboard.svg"}
            />
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol sizeXs="4">
            <LeveCard
              pack={props.packName}
              level="5"
              active={5 <= props.unlockedLevels}
              imgUrl={levelIconsPath + "director-chair.svg"}
            />
          </IonCol>
        </IonRow>
      </IonGrid>
      {/* </div> */}
    </IonSlide>
  );
};

export default PackSlide;
