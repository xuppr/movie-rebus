import React, { useState, useEffect, useReducer } from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { isPlatform } from "@ionic/react";

import RebusView from "./pages/RebusView";
import PackView from "./pages/PackView";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/darkModeVariables.css";

import { Route } from "react-router";
import UserPreferencesView from "./pages/UserPreferencesView";
import FakePage from "./pages/FakePage";

import { UserPrefsContext, UserPrefs } from "./UserPrefsContext";
import { RebusContext, reducer as rebusReducer } from "./RebusContext";

import { PackStatus } from "./interfaces";

function toggleDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.body.classList.add("dark");
    rebusButtonDarkMode();
    rebusInputDarkMode();
  } else {
    document.body.classList.remove("dark");
    rebusButtonLightMode();
    rebusInputLightMode();
  }
}

function rebusInputDarkMode() {
  document.documentElement.style.setProperty(
    "--rebus-input-text-color",
    "white"
  );
}

function rebusInputLightMode() {
  document.documentElement.style.setProperty(
    "--rebus-input-text-color",
    "black"
  );
}

function rebusButtonDarkMode() {
  document.documentElement.style.setProperty(
    "--rebus-button-background-color",
    "#85a3b1"
  );
  document.documentElement.style.setProperty(
    "--rebus-button-base-color",
    "#85a3b1"
  );
  document.documentElement.style.setProperty(
    "--rebus-button-base-color1",
    "#1e2023"
  );
  document.documentElement.style.setProperty(
    "--rebus-button-bkg-color-before",
    "#000000"
  );
  document.documentElement.style.setProperty(
    "--rebus-button-bkg-color-active",
    "#f4f5f8"
  );
}

function rebusButtonLightMode() {
  document.documentElement.style.setProperty(
    "--rebus-button-background-color",
    "#f5f6f9"
  );
  document.documentElement.style.setProperty(
    "--rebus-button-base-color",
    "#85a3b1"
  );
  document.documentElement.style.setProperty(
    "--rebus-button-base-color1",
    "#f4f5f8"
  );
  document.documentElement.style.setProperty(
    "--rebus-button-bkg-color-before",
    "#c4e4f9"
  );
  document.documentElement.style.setProperty(
    "--rebus-button-bkg-color-active",
    "#c4e4f9"
  );
}

function generateInitialSolvedMap() {
  return {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
}
if (isPlatform("ios") === true || isPlatform("android") === true) {
  window.screen.orientation.lock("portrait");
}

const App: React.FC = () => {
  // * *** USER PREFERENCES STATE***
  const [userPrefs, setUserPrefs] = useState<UserPrefs>({ darkMode: false });

  // * *** REBUS STATE ***
  const rebusInitialState = {
    packs: {
      "default": {
        status: PackStatus.Available,
        solvedMap: generateInitialSolvedMap(),
        unlockedLevels: 1,
        "1": [
          {
            title: "ROBIN HOOD",
            imgUrl: "/assets/rebus-images/rebus2-reduced.png",
            solved: false,
          },
          {
            title: "GHOST",
            imgUrl: "/assets/rebus-images/rebus3-reduced.png",
            solved: false,
          },
          {
            title: "THE LION KING",
            imgUrl: "/assets/rebus-images/rebus4-reduced.png",
            solved: false,
          },
          {
            title: "BRAVEHEART",
            imgUrl: "/assets/rebus-images/rebus5-reduced.png",
            solved: false,
          },
          {
            title: "THE FOUR FEATHERS",
            imgUrl: "/assets/rebus-images/rebus13-reduced.png",
            solved: false,
          },
          {
            title: "THE ISLAND",
            imgUrl: "/assets/rebus-images/moretrebuss3-reduced.png",
            solved: false,
          },
          {
            title: "THE CROW",
            imgUrl: "/assets/rebus-images/skin6-reduced.png",
            solved: false,
          },
        ],
        "2": [
          {
            title: "SATURDAY NIGHT FEVER",
            imgUrl: "/assets/rebus-images/rebus11-reduced.png",
            solved: false,
          },
          {
            title: "HOOK",
            imgUrl: "/assets/rebus-images/rebus12-reduced.png",
            solved: false,
          },
          {
            title: "FIFTY SHADES OF GREY",
            imgUrl: "/assets/rebus-images/rebusscnd1-reduced.png",
            solved: false,
          },
          {
            title: "THE BLAIR WITCH PROJECT",
            imgUrl: "/assets/rebus-images/rebus9-reduced.png",
            solved: false,
          },
          {
            title: "THE SCORPION KING",
            imgUrl: "/assets/rebus-images/rebus14-reduced.png",
            solved: false,
          },
          {
            title: "INTERVIEW WITH THE VAMPIRE",
            imgUrl: "/assets/rebus-images/moretrebuss5-reduced.png",
            solved: false,
          },
          {
            title: "THE GREEN MILE",
            imgUrl: "/assets/rebus-images/moretrebuss6-reduced.png",
            solved: false,
          },
        ],
        "3": [
          {
            title: "12 ANGRY MEN",
            imgUrl: "/assets/rebus-images/rebus8-reduced.png",
            solved: false,
          },
          {
            title: "OZ",
            imgUrl: "/assets/rebus-images/rebusscnd2-reduced.png",
            solved: false,
          },
          {
            title: "THE WICKER MAN",
            imgUrl: "/assets/rebus-images/rebusscnd4-reduced.png",
            solved: false,
          },
          {
            title: "POINT BREAK",
            imgUrl: "/assets/rebus-images/moretrebuss1-reduced.png",
            solved: false,
          },
          {
            title: "WHO FRAMED ROGER RABBIT",
            imgUrl: "/assets/rebus-images/moretrebuss2-reduced.png",
            solved: false,
          },
          {
            title: "SPACE COWBOYS",
            imgUrl: "/assets/rebus-images/moretrebuss4-reduced.png",
            solved: false,
          },
          {
            title: "BURNING MAN",
            imgUrl: "/assets/rebus-images/skin5-reduced.png",
            solved: false,
          },
        ],
        "4": [],
        "5": [],
      },
      "Christmas Pack": { status: PackStatus.NotPurchased },
      "Love Pack": { status: PackStatus.NotPurchased },
      "Oscar Pack": { status: PackStatus.NotPurchased },
      "Tom Cruise Pack": { status: PackStatus.NotPurchased },
    },
  };

  const [rebusState, rebusDispatch] = useReducer<any>(
    rebusReducer,
    rebusInitialState
  );

  useEffect(() => {
    toggleDarkMode(userPrefs.darkMode);
  }, [userPrefs]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            exact
            path="/"
            render={() => (
              <RebusContext.Provider
                value={{ packs: (rebusState as any).packs! }}
              >
                <PackView />
              </RebusContext.Provider>
            )}
          />
          <Route
            path="/rebusview/:pack/:level"
            render={(props) => {
              const pack = props.match.params.pack!;
              const level = props.match.params.level!;
              const unlockedLevels = (rebusState as any).packs![pack]
                .unlockedLevels;
              const rebusLocalState = (rebusState as any).packs![pack][level];

              return (
                <RebusContext.Provider
                  value={{
                    currentLevel: rebusLocalState,
                    unlockedLevels,
                    rebusDispatch,
                  }}
                >
                  <RebusView {...props} />
                </RebusContext.Provider>
              );
            }}
          />

          <Route
            exact
            path="/userpref"
            render={() => (
              <UserPrefsContext.Provider value={{ userPrefs, setUserPrefs }}>
                <UserPreferencesView />
              </UserPrefsContext.Provider>
            )}
          />
          <Route path="/fakePage" render={() => <FakePage />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
