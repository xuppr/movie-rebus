import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import { IonSlide, IonButton } from "@ionic/react";
import Keyboard from "./Keyboard";
import { createSetRebusSolved } from "../RebusContext";

import "../styles/RebusSlideStyles.css";

// const RebusSlide: React.FC<{
//   packName: string;
//   level: string;
//   index: number;
//   image: string;
//   title: string;
//   solved: boolean;
//   rebusDispatch: (action: any) => void;
// }>
const RebusSlide = React.forwardRef(
  (
    props: {
      packName: string;
      level: string;
      index: number;
      image: string;
      title: string;
      solved: boolean;
      rebusDispatch: (action: any) => void;
    },
    ref: any
  ) => {
    const [movieTitleUserInput, setMovieTitleUserInput] = useState<string>("");

    const rebusBlur = () => {
      console.log("exposed blur call");
      inputRef.current!.blur();
    };

    useImperativeHandle(ref, () => ({
      rebusBlur,
    }));

    useEffect(() => {
      let len = movieTitleUserInput.length;
      inputRef.current?.setSelectionRange(len - 1, len);
    }, [movieTitleUserInput]);

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
        inputRef.current!.classList.add("ahashakeheartache");
      }
    };

    const [keyboardAreaHideClassName, setKeyboardAreaHideClassName] = useState<
      string
    >("rebus-flex-hidden");

    const inputRef = useRef<HTMLInputElement>(null);

    function hideKeyboardArea() {
      setKeyboardAreaHideClassName("rebus-flex-hidden");
    }

    function showKeyboardArea() {
      setKeyboardAreaHideClassName("");
    }

    function handleKeyboardTouch(key: String) {
      if (key === "⌫") {
        updateCursor();
      } else {
        setMovieTitleUserInput(movieTitleUserInput! + key);
      }
      // inputRef.current!.focus();
    }

    function updateCursor() {
      setMovieTitleUserInput(
        movieTitleUserInput.slice(0, movieTitleUserInput.length - 1)
      );
    }

    function preventBlur() {
      inputRef.current!.focus();
    }

    // * ----------------------------

    return (
      <IonSlide>
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
                      onAnimationEnd={() => {
                        inputRef.current!.classList.remove("ahashakeheartache");
                      }}
                      id="rebus-input-id"
                      readOnly
                      ref={inputRef}
                      type="text"
                      className="rebus-input"
                      onFocus={(e) => {
                        showKeyboardArea();
                      }}
                      onBlur={hideKeyboardArea}
                      value={movieTitleUserInput}
                      onChange={updateCursor}
                    />
                    <IonButton
                      onClick={() => {
                        preventBlur();
                        handleButtonClick();
                      }}
                    >
                      try
                    </IonButton>
                  </>
                )}
              </div>
            </div>
            <div className="flex-bordered test-flex-lateral" />
          </div>
          <div
            onClick={preventBlur}
            id="rebus-keyboard-id"
            className={`flex-bordered flex-transitioned-div rebus-flex-div-visible ${keyboardAreaHideClassName}`}
          >
            <Keyboard
              keyTouched={(key) => {
                handleKeyboardTouch(key);
              }}
            />
          </div>
        </div>
      </IonSlide>
    );
  }
);

export default RebusSlide;
