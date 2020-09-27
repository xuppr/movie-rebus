import React from "react";
import {
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
} from "@ionic/react";
import LeveCard from "./LevelCard";
import LevelCard from "./LevelCard";

const PackSlide: React.FC<{ packName: string }> = (props) => {
  return (
    <IonSlide style={{ display: "block" }}>
      <div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className="ion-text-center">
                <h1>Dafault Pack</h1>
                <p>
                  This would be the home page. You can swipe to choose from
                  varius pack. From here you can go to level 1 prototype and
                  turn back with the back arrow. All the drawings are placed
                  together in level 1 for convenience.
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        <IonGrid style={{ marginTop: "15%" }}>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="4">
              <LeveCard level="level 1" active={true} />
            </IonCol>
            <IonCol sizeXs="4">
              <LeveCard level="level 2" active={false} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="4">
              <LevelCard level="level 3" active={false} />
            </IonCol>
            <IonCol sizeXs="4">
              <LevelCard level="level 4" active={false} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="4">
              <LeveCard level="level 5" active={false} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonSlide>
  );
};

export default PackSlide;
