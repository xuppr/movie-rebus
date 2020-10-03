import React from "react";
import PackSlidesGroup from "../components/PackSlidesGroup";
import TooledupHeader from "../components/TooledupHeader";
import { IonPage, IonContent } from "@ionic/react";

const PackView = () => {
  return (
    <IonPage>
      <TooledupHeader backButton={false} />
      <IonContent>
        <PackSlidesGroup />
      </IonContent>
    </IonPage>
  );
};

export default PackView;
