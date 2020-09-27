import React, { Fragment } from "react";
import PackSlidesGroup from "./PackSlidesGroup";
import TooledupHeader from "./TooledupHeader";
import { IonPage, IonContent } from "@ionic/react";

const PackView = () => {
  return (
    <IonPage>
      <TooledupHeader backbuttonToHome={false} />
      <IonContent>
        <PackSlidesGroup />
      </IonContent>
    </IonPage>
  );
};

export default PackView;
