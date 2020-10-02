import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
} from "@ionic/react";
import { chevronBack, settingsSharp, helpSharp } from "ionicons/icons";

const TooledupHeader: React.FC<{
  backButton?: boolean;
  optionsButton?: boolean;
}> = ({ backButton = true, optionsButton = true }) => {
  return (
    <IonHeader>
      <IonToolbar>
        {backButton ? (
          <IonButtons slot="start">
            {/* <IonButton routerLink={"/"} routerDirection={"back"}> */}
            {/* <IonIcon slot="icon-only" icon={chevronBack} /> */}
            <IonBackButton defaultHref="/" />
            {/* </IonButton> */}
          </IonButtons>
        ) : undefined}
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" icon={helpSharp} />
          </IonButton>
          {optionsButton ? (
            <IonButton routerLink={"/options"}>
              <IonIcon slot="icon-only" icon={settingsSharp} />
            </IonButton>
          ) : undefined}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default TooledupHeader;
