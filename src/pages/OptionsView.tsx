import React from "react";
import { IonPage, IonContent, IonItem } from "@ionic/react";
import TooledupHeader from "../components/TooledupHeader";

const OptionsView = () => {
  return (
    <IonPage>
      <TooledupHeader optionsButton={false} />
      <IonContent>
        {Array(10)
          .fill(0)
          .map((v, i) => (
            <IonItem
              routerLink="/fakePage"
              key={`optionkey${i}`}
            >{`option ${i}`}</IonItem>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default OptionsView;
