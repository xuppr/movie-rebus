import React from "react";
import {
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonImg,
  IonCard,
  IonButton,
} from "@ionic/react";

import "./RebusSlide.css";

const RebusSlide: React.FC<{ image: string }> = (props) => {
  return (
    <IonSlide>
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonCol size="12" sizeSm="9" sizeMd="7" sizeLg="6" sizeXl="5">
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <IonItem>
                  <IonImg src={props.image} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol size="11">
                <IonItem className="rebus-input-button-item">
                  <IonInput className="rebus-input" />
                  <IonButton expand="full" color="secondary">
                    Try
                  </IonButton>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default RebusSlide;
