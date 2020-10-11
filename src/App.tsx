import React, { useState, useEffect, useReducer } from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
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
import {
  RebusContext,
  actionTypes as rebusActionTypes,
  reducer as rebusReducer,
} from "./RebusContext";

function toggleDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

const App: React.FC = () => {
  // * *** USER PREFERENCES STATE***
  const [userPrefs, setUserPrefs] = useState<UserPrefs>({ darkMode: false });

  // * *** REBUS STATE ***

  const rebusInitialState = {
    "packs": {
      "default": {
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
            title: "THE BLAIR WITCH PROJECT",
            imgUrl: "/assets/rebus-images/rebus9-reduced.png",
            solved: false,
          },
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
        ],
      },
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
          <Route exact path="/" render={() => <PackView />} />
          <Route
            path="/rebusview/:pack/:level"
            render={(props) => {
              const pack = props.match.params.pack!;
              const level = props.match.params.level!;
              const rebusLocalState = (rebusState as any).packs![pack][level];

              return (
                <RebusContext.Provider
                  value={{ currentLevel: rebusLocalState, rebusDispatch }}
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
