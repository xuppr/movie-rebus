import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonSlide,
} from "@ionic/react";

const PackPurchaseCard: React.FC<{ packName: String }> = (props) => {
  return (
    <IonSlide>
      <IonCard className="ion-padding">
        <IonCardHeader>
          <IonCardTitle>{props.packName}</IonCardTitle>
        </IonCardHeader>

        <IonButton size="large" color="success">
          Unlock
        </IonButton>
      </IonCard>
    </IonSlide>
  );
};

export default PackPurchaseCard;
