import React from "react";
import { IonCard, IonCardContent, IonImg } from "@ionic/react";

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
    >
      <IonImg className="ion-padding" src={props.imgUrl} />
      <IonCardContent>{props.level}</IonCardContent>
    </IonCard>
  );
};

export default LevelCard;
