import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonIcon,
  IonToggle,
  IonLabel,
} from "@ionic/react";
import TooledupHeader from "../components/TooledupHeader";

import { moon } from "ionicons/icons";

const OptionsView: React.FC<{
  settings: boolean;
  toggleDarkMode: Function;
}> = ({ settings, toggleDarkMode }) => {
  return (
    <IonPage>
      <TooledupHeader optionsButton={false} />
      <IonContent>
        <IonItem>
          <IonIcon slot="start" icon={moon} />
          <IonLabel>Dark Mode</IonLabel>
          <IonToggle
            slot="end"
            checked={settings}
            onIonChange={() => toggleDarkMode()}
          />
        </IonItem>
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
