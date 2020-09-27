import React, { Fragment } from "react";
import {
  IonContent,
  IonTabBar,
  IonFooter,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonPage,
} from "@ionic/react";
import RebusSlidesGroup from "./RebusSlidesGroup";
import RebusHintsButtonsGroup from "./RebusHintsButtonsGroup";
import TooledupHeader from "./TooledupHeader";

import {
  textSharp,
  calendarSharp,
  personSharp,
  filmSharp,
} from "ionicons/icons";

const RebusView = () => {
  return (
    <IonPage>
      <TooledupHeader backbuttonToHome={true} />
      <IonContent fullscreen>
        <RebusSlidesGroup />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <RebusHintsButtonsGroup />
        </IonToolbar>
      </IonFooter>
      {/* <IonFooter className="ion-no-border ion-padding">
        <IonToolbar>
          <IonButtons className="ion-justify-content-center">
            <IonButton>
              <IonIcon slot="icon-only" icon={textSharp} />
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={calendarSharp} />
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={personSharp} />
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={filmSharp} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter> */}
    </IonPage>
  );
};

export default RebusView;
