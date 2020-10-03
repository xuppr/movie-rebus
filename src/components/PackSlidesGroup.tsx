import React from "react";
import {
  IonSlides,
  IonSlide,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
} from "@ionic/react";
import PackSlide from "./PackSlide";
import "./PackSlidesGroup.css";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const PackSlidesGroup = () => {
  return (
    <IonSlides pager={false} options={slideOpts}>
      <PackSlide packName="Default Pack" />
      <IonSlide>
        <IonCard className="ion-padding">
          <IonCardHeader>
            <IonCardTitle>Christmas Pack</IonCardTitle>
          </IonCardHeader>

          <IonButton size="large" color="success">
            Unlock
          </IonButton>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard className="ion-padding">
          <IonCardHeader>
            <IonCardTitle>Love Pack</IonCardTitle>
          </IonCardHeader>

          <IonButton size="large" color="success">
            Unlock
          </IonButton>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard className="ion-padding">
          <IonCardHeader>
            <IonCardTitle>Oscar Pack</IonCardTitle>
          </IonCardHeader>

          <IonButton size="large" color="success">
            Unlock
          </IonButton>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard className="ion-padding">
          <IonCardHeader>
            <IonCardTitle>Tom Cruise Pack</IonCardTitle>
          </IonCardHeader>

          <IonButton size="large" color="success">
            Unlock
          </IonButton>
        </IonCard>
      </IonSlide>
    </IonSlides>
  );
};

export default PackSlidesGroup;
