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
      <IonIcon
        style={{
          fill: "var(--ion-color-dark)",
          height: "12vh",
          width: "12vw",
          minHeight: 0,
        }}
        src={props.imgUrl}
      />
      <IonCardContent>{props.level}</IonCardContent>
    </IonCard>
  );
};

export default LevelCard;
