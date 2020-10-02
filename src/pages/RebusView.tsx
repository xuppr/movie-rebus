import React, { Fragment } from "react";
import { IonContent, IonFooter, IonToolbar, IonPage } from "@ionic/react";
import RebusSlidesGroup from "../components/RebusSlidesGroup";
import RebusHintsButtonsGroup from "../components/RebusHintsButtonsGroup";
import TooledupHeader from "../components/TooledupHeader";

const RebusView = () => {
  return (
    <IonPage>
      <TooledupHeader />
      <IonContent fullscreen>
        <RebusSlidesGroup />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <RebusHintsButtonsGroup />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default RebusView;
