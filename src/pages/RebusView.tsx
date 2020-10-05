import React, { useState, useEffect } from "react";
import { IonContent, IonFooter, IonToolbar, IonPage } from "@ionic/react";
import RebusSlidesGroup from "../components/RebusSlidesGroup";
import RebusHintsButtonsGroup from "../components/RebusHintsButtonsGroup";
import TooledupHeader from "../components/TooledupHeader";

import { RebusSlidesData } from "../interfaces";
import { RouteComponentProps } from "react-router";

interface RebusViewSelectionInfo
  extends RouteComponentProps<{ pack: string; level: string }> {}

const RebusView: React.FC<RebusViewSelectionInfo> = (props) => {
  const [rebusData, setRebusData] = useState<RebusSlidesData>({
    levels: {
      level1: {
        "robin hood": {
          imgUrl: "/assets/rebus-images/rebus2-reduced.png",
          solved: false,
        },
        "ghost": {
          imgUrl: "/assets/rebus-images/rebus3-reduced.png",
          solved: false,
        },
        "the lion king": {
          imgUrl: "/assets/rebus-images/rebus4-reduced.png",
          solved: false,
        },
        "braveheart": {
          imgUrl: "/assets/rebus-images/rebus5-reduced.png",
          solved: false,
        },
        "the blair witch project": {
          imgUrl: "/assets/rebus-images/rebus9-reduced.png",
          solved: false,
        },
        "saturday night fever": {
          imgUrl: "/assets/rebus-images/rebus11-reduced.png",
          solved: false,
        },
        "hook": {
          imgUrl: "/assets/rebus-images/rebus12-reduced.png",
          solved: false,
        },
        "fifty shades of grey": {
          imgUrl: "/assets/rebus-images/rebusscnd1-reduced.png",
          solved: false,
        },
      },
    },
  });

  function setSolved(title: string) {
    const solvedObj = createSolved(title);

    setRebusData({
      levels: {
        level1: {
          ...rebusData.levels.level1,
          [title]: solvedObj,
        },
      },
    });
  }

  function createSolved(title: string) {
    return {
      imgUrl: rebusData.levels.level1[title].imgUrl,
      solved: true,
    };
  }

  const [level, setLevel] = useState(props.match.params.level);
  const [pack, setPack] = useState(props.match.params.pack);

  return (
    <IonPage>
      <TooledupHeader title={`level ${level}`} />
      <IonContent fullscreen>
        <RebusSlidesGroup
          slidesData={rebusData}
          selectedLevel={parseInt(level)}
          handleSolved={setSolved}
        />
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
