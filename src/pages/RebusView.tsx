import React, { useState, useEffect } from "react";
import { IonContent, IonFooter, IonToolbar, IonPage } from "@ionic/react";
import RebusSlidesGroup from "../components/RebusSlidesGroup";
import RebusHintsButtonsGroup from "../components/RebusHintsButtonsGroup";
import TooledupHeader from "../components/TooledupHeader";

import { RouteComponentProps } from "react-router";

interface RebusViewSelectionInfo
  extends RouteComponentProps<{ pack: string; level: string }> {}

const RebusView: React.FC<RebusViewSelectionInfo> = (props) => {
  const [level, setLevel] = useState(props.match.params.level);
  const [pack, setPack] = useState(props.match.params.pack);

  return (
    <IonPage>
      <TooledupHeader title={`level ${level}`} />
      <IonContent fullscreen>
        <RebusSlidesGroup selectedPack={pack} selectedLevel={level} />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <RebusHintsButtonsGroup />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default RebusView;
