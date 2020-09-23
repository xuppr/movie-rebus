import React from "react";
import { IonSlides, IonContent } from "@ionic/react";
import RebusSlide from "./RebusSlide";

import "./RebusSlidesGroup.css";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const RebusSlidesGroup: React.FC = () => (
  <IonContent>
    <IonSlides pager={false} options={slideOpts}>
      <RebusSlide image={"/assets/rebus-images/rebus2.png"} />
      <RebusSlide image={"/assets/rebus-images/rebus3.png"} />
      <RebusSlide image={"/assets/rebus-images/rebus4.png"} />
    </IonSlides>
  </IonContent>
);

export default RebusSlidesGroup;
