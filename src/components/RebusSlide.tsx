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
  IonLabel,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

import "./RebusSlide.css";

const RebusSlide: React.FC<{
  image: string;
  title: string;
  solved: boolean;
  handleSolved: (title: string) => void;
}> = (props) => {
  const [movieTitleUserInput, setMovieTitleUserInput] = useState<null | string>(
    null
  );

  const handleButtonClick = () => {
    compareUserInputWithTitle();
  };

  const compareUserInputWithTitle = () => {
    if (
      movieTitleUserInput?.toLowerCase().trim().replace(/\s+/g, " ") ===
      props.title
    ) {
      props.handleSolved(props.title);
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
                <IonImg src={props.image} />
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol size="11">
                {props.solved ? (
                  <IonCardHeader>
                    <IonCardTitle style={{ color: "green" }}>
                      {props.title}
                    </IonCardTitle>
                  </IonCardHeader>
                ) : (
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
                      onClick={handleButtonClick}
                    >
                      Try
                    </IonButton>
                  </IonItem>
                )}
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default RebusSlide;
