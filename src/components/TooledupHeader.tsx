import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { chevronBack, settingsSharp, helpSharp } from "ionicons/icons";

const TooledupHeader: React.FC<{ backbuttonToHome: boolean }> = (props) => {
  return (
    <IonHeader>
      <IonToolbar>
        {props.backbuttonToHome ? (
          <IonButtons slot="start">
            <IonButton routerLink={"/"} routerDirection={"back"}>
              <IonIcon slot="icon-only" icon={chevronBack} />
            </IonButton>
          </IonButtons>
        ) : undefined}
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" icon={helpSharp} />
          </IonButton>
          <IonButton>
            <IonIcon slot="icon-only" icon={settingsSharp} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default TooledupHeader;
