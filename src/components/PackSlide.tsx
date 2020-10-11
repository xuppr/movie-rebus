import React from "react";
import { IonSlide, IonGrid, IonRow, IonCol } from "@ionic/react";
import LeveCard from "./LevelCard";
import LevelCard from "./LevelCard";

const PackSlide: React.FC<{ packName: string }> = (props) => {
  const levelIconsPath = "/assets/level-icons/";

  return (
    <IonSlide style={{ display: "block" }}>
      <div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className="ion-text-center">
                <h1>{props.packName}</h1>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        <IonGrid style={{ marginTop: "5%" }}>
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
                active={false}
                imgUrl={levelIconsPath + "popcorn.svg"}
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="4">
              <LevelCard
                pack={props.packName}
                level="3"
                active={false}
                imgUrl={levelIconsPath + "hipster.svg"}
              />
            </IonCol>
            <IonCol sizeXs="4">
              <LevelCard
                pack={props.packName}
                level="4"
                active={false}
                imgUrl={levelIconsPath + "clapperboard.svg"}
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="4">
              <LeveCard
                pack={props.packName}
                level="5"
                active={false}
                imgUrl={levelIconsPath + "director-chair.svg"}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonSlide>
  );
};

export default PackSlide;
