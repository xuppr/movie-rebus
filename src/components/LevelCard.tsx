import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonIcon,
  IonLabel,
  IonCardContent,
} from "@ionic/react";

const LevelCard: React.FC<{ level: string; active: boolean }> = (props) => {
  return (
    <IonCard button disabled={!props.active} routerLink={"/rebusview"}>
      <IonCardHeader>
        <IonCardTitle>{props.level}</IonCardTitle>
      </IonCardHeader>
      {/* <IonCardContent>description</IonCardContent> */}
    </IonCard>
  );
};

export default LevelCard;
