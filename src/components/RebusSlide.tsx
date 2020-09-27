import React, { useState } from "react";
import {
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonImg,
  IonButton,
} from "@ionic/react";

import "./RebusSlide.css";

const RebusSlide: React.FC<{ image: string; title: string }> = (props) => {
  const [movieTitleUserInput, setMovieTitleUserInput] = useState<null | string>(
    null
  );

  const compareUserInputWithTitle = () => {
    if (
      movieTitleUserInput?.toLowerCase().trim().replace(/\s+/g, " ") ===
      props.title
    ) {
      alert("Correct!");
    } else {
      alert("Wrong Answer, try again!");
    }
  };

  return (
    <IonSlide>
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonCol size="12" sizeSm="9" sizeMd="7" sizeLg="6" sizeXl="5">
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <IonItem>
                  <IonImg src={props.image} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol size="11">
                <IonItem className="rebus-input-button-item">
                  <IonInput
                    className="rebus-input"
                    onIonInput={(input: any) =>
                      setMovieTitleUserInput(input.target.value)
                    }
                  />
                  <IonButton
                    expand="full"
                    color="secondary"
                    onClick={compareUserInputWithTitle}
                  >
                    Try
                  </IonButton>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default RebusSlide;
