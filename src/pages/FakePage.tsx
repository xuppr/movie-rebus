import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import TooledupHeader from "../components/TooledupHeader";

const FakePage = () => {
  return (
    <IonPage>
      <TooledupHeader />
      <IonContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, omnis
        ad nihil ducimus earum doloribus. Ad dolores praesentium earum
        recusandae, nam minus, sequi eaque quibusdam ab, nemo id porro odit.
      </IonContent>
    </IonPage>
  );
};

export default FakePage;
