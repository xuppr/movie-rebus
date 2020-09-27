import React from "react";
import {
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonButtons,
  IonButton,
} from "@ionic/react";

import { text, calendar, person, film } from "ionicons/icons";

const RebusHintsButtonsGroup = () => {
  return (
    // <IonSegment>
    //   <IonSegmentButton value="first letter">
    //     <IonIcon icon={text} />
    //   </IonSegmentButton>
    //   <IonSegmentButton value="year">
    //     <IonIcon icon={calendar} />
    //   </IonSegmentButton>
    //   <IonSegmentButton value="leading actor">
    //     <IonIcon icon={person} />
    //   </IonSegmentButton>
    //   <IonSegmentButton value="movie title">
    //     <IonIcon icon={film} />
    //   </IonSegmentButton>
    // </IonSegment>
    <IonButtons className="ion-justify-content-center ion-justify-content-evenly">
      <IonButton>
        <IonIcon icon={text} />
      </IonButton>
      <IonButton>
        <IonIcon icon={calendar} />
      </IonButton>
      <IonButton>
        <IonIcon icon={person} />
      </IonButton>
      <IonButton>
        <IonIcon icon={film} />
      </IonButton>
    </IonButtons>
  );
};

export default RebusHintsButtonsGroup;
