import React, { useState, useRef } from "react";
import { IonSlide, IonButton } from "@ionic/react";
import Keyboard from "./Keyboard";
import { createSetRebusSolved } from "../RebusContext";

import "../styles/RebusSlideStyles.css";

const RebusSlide: React.FC<{
  packName: string;
  level: string;
  index: number;
  image: string;
  title: string;
  solved: boolean;
  rebusDispatch: (action: any) => void;
}> = (props) => {
  const [movieTitleUserInput, setMovieTitleUserInput] = useState<null | string>(
    null
  );

  const handleButtonClick = () => {
    compareUserInputWithTitle();
  };

  const compareUserInputWithTitle = () => {
    if (
      movieTitleUserInput?.toUpperCase().trim().replace(/\s+/g, " ") ===
      props.title
    ) {
      props.rebusDispatch(
        createSetRebusSolved(props.packName, props.level, props.index)
      );
      hideKeyboardArea();
    } else {
      alert("Wrong Answer, try again!");
    }
  };

  const [keyboardAreaHideClassName, setKeyboardAreaHideClassName] = useState<
    string
  >("rebus-flex-hidden");

  const inputRef = useRef<HTMLInputElement>(null);

  function handleTouchStart(nodeName: string) {
    if (nodeName === "ION-BUTTON" || nodeName === "INPUT") {
      return;
    } else {
      hideKeyboardArea();
    }
  }

  function handleTouchEnd(nodeName: string) {
    if (nodeName !== "INPUT") {
      inputRef?.current?.blur();
    }
  }

  const handleClick = (e: any) => {
    if (e.target.nodeName === "INPUT") {
      inputRef.current?.focus();
    }
  };

  function hideKeyboardArea() {
    setKeyboardAreaHideClassName("rebus-flex-hidden");
  }

  function showKeyboardArea() {
    setKeyboardAreaHideClassName("");
  }

  // * ----------------------------

  return (
    <IonSlide
      onClick={(e) => handleClick(e)}
      onTouchEnd={(e: any) => handleTouchEnd(e.target.nodeName!)}
      onTouchStart={(e: any) => handleTouchStart(e.target.nodeName!)}
    >
      <div style={{ height: "100%", width: "100%" }} className="test-grid">
        <div className="flex-bordered test-flex-img-div flex-transitioned-div">
          <div className="flex-bordered test-flex-lateral" />
          <div className="flex-bordered test-flex-central">
            <div className="rebus-img-container">
              <img src={props.image} />
            </div>
            <div className="rebus-input-container">
              {props.solved ? (
                <h3 style={{ color: "greenyellow", fontWeight: "bold" }}>
                  {props.title.toUpperCase()}
                </h3>
              ) : (
                <>
                  <input
                    ref={inputRef}
                    type="text"
                    className="rebus-input"
                    onFocus={showKeyboardArea}
                    onChange={(e) => setMovieTitleUserInput(e.target.value!)}
                    readOnly
                  />
                  <IonButton onClick={handleButtonClick}>try</IonButton>
                </>
              )}
            </div>
          </div>
          <div className="flex-bordered test-flex-lateral" />
        </div>
        <div
          className={`flex-bordered flex-transitioned-div rebus-flex-div-visible ${keyboardAreaHideClassName}`}
        >
          <Keyboard />
        </div>
      </div>
    </IonSlide>
  );
};

export default RebusSlide;
