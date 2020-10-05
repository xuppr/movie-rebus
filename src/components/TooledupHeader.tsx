import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import { chevronBack, settingsSharp, helpSharp } from "ionicons/icons";

const TooledupHeader: React.FC<{
  backButton?: boolean;
  optionsButton?: boolean;
  title?: string;
}> = ({ backButton = true, optionsButton = true, title = "" }) => {
  return (
    <IonHeader>
      <IonToolbar>
        {title ? <IonTitle>{title}</IonTitle> : undefined}
        {backButton ? (
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        ) : undefined}
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" icon={helpSharp} />
          </IonButton>
          {optionsButton ? (
            <IonButton routerLink={"/userpref"}>
              <IonIcon slot="icon-only" icon={settingsSharp} />
            </IonButton>
          ) : undefined}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default TooledupHeader;
