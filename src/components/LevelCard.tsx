import React from "react";
import { IonCard, IonCardContent, IonImg, IonIcon } from "@ionic/react";

const LevelCard: React.FC<{
  pack: string;
  level: string;
  active: boolean;
  imgUrl: string;
}> = (props) => {
  return (
    <IonCard
      button
      disabled={!props.active}
      routerLink={`/rebusview/${props.pack}/${props.level}`}
      className="level-card-icon-container"
    >
      {/* <IonImg
        className="ion-padding level-card-icon-container"
        style={{ fill: "red" }}
        src={props.imgUrl}
      /> */}
      {/* <img src={props.imgUrl} /> */}
      <IonIcon
        style={{ fill: "var(--ion-color-dark)", height: "15vh", width: "15vw" }}
        src={props.imgUrl}
      />
      <IonCardContent>{props.level}</IonCardContent>
    </IonCard>
  );
};

export default LevelCard;
