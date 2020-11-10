import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import { IonSlide } from "@ionic/react";
import Keyboard from "./Keyboard";
import { createSetRebusSolved } from "../RebusContext";

import "../styles/RebusSlideStyles.css";

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
    const [onFocus, setOnFocus] = useState<boolean>(false);
    const [inputClassName, setInputClassName] = useState<string>("");
    const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
    const [keyboardAreaHideClassName, setKeyboardAreaHideClassName] = useState<
      string
    >("rebus-flex-hidden");

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(updateScroll, [movieTitleUserInput]);

    const rebusBlur = () => {
      setOnFocus(false);
    };

    useImperativeHandle(ref, () => ({
      rebusBlur,
    }));

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
      } else if (keyboardOpen) {
        setInputClassName("ahashakeheartache");
      }
    };

    useEffect(() => {
      if (onFocus) {
        showKeyboardArea();
      } else {
        hideKeyboardArea();
      }
    }, [onFocus]);

    function hideKeyboardArea() {
      setKeyboardAreaHideClassName("rebus-flex-hidden");
    }

    function showKeyboardArea() {
      setKeyboardAreaHideClassName("");
    }

    function updateScroll() {
      if (inputRef.current) {
        inputRef.current.scrollLeft = inputRef.current.scrollWidth;
      }
    }

    function handleKeyboardTouch(key: String) {
      if (key === "⌫") {
        setMovieTitleUserInput(
          movieTitleUserInput.slice(0, movieTitleUserInput.length - 1)
        );
      } else {
        setMovieTitleUserInput(movieTitleUserInput! + key);
      }
    }

    function handleGenericAreaTouch() {
      setOnFocus(!onFocus);
    }

    // * ----------------------------

    return (
      <IonSlide>
        <div style={{ height: "100%", width: "100%" }} className="test-grid">
          <div
            onClick={handleGenericAreaTouch}
            className="flex-bordered test-flex-img-div flex-transitioned-div"
          >
            <div className="flex-bordered test-flex-lateral" />
            <div className="flex-bordered test-flex-central">
              <div className="rebus-img-container">
                <img src={props.image} />
              </div>
              <div
                onClick={(e) => {
                  if (!onFocus) {
                    setOnFocus(true);
                  }
                  e.stopPropagation();
                }}
                className="rebus-input-container"
              >
                {props.solved ? (
                  <h3 style={{ color: "greenyellow", fontWeight: "bold" }}>
                    {props.title.toUpperCase()}
                  </h3>
                ) : (
                  <>
                    <div
                      onAnimationEnd={() => {
                        setInputClassName("");
                      }}
                      ref={inputRef}
                      className={`rebus-input ${inputClassName}`}
                    >
                      <div className="typewriter">
                        <h3>{movieTitleUserInput}</h3>
                      </div>
                    </div>
                    <button
                      className="rebus-button"
                      onClick={handleButtonClick}
                    >
                      try
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="flex-bordered test-flex-lateral" />
          </div>
          <div
            onTransitionEnd={() => {
              setKeyboardOpen(onFocus);
            }}
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
