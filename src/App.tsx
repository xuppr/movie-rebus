import React, { useState } from "react";
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

const App: React.FC = () => {
  // * *** USER PREFERENCES ***
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* modificare paths. passare props per inserimento pack e rebus dinamico */}
          <Route exact path="/" render={() => <PackView />} />
          <Route exact path="/rebusview" render={() => <RebusView />} />
          <Route
            path="/userpref"
            render={() => (
              <UserPreferencesView
                settings={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            )}
          />
          <Route path="/fakePage" render={() => <FakePage />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
