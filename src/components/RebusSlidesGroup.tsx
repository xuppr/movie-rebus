import React from "react";
import { IonSlides } from "@ionic/react";
import RebusSlide from "./RebusSlide";

import "./RebusSlidesGroup.css";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const RebusSlidesGroup: React.FC = () => (
  <IonSlides pager={false} options={slideOpts}>
    <RebusSlide image={"/assets/rebus-images/rebus2.png"} title="robin hood" />
    <RebusSlide image={"/assets/rebus-images/rebus3.png"} title="ghost" />
    <RebusSlide
      image={"/assets/rebus-images/rebus4.png"}
      title="the lion king"
    />
    <RebusSlide image={"/assets/rebus-images/rebus5.png"} title="braveheart" />
    <RebusSlide
      image={"/assets/rebus-images/rebus9.png"}
      title="the blair witch project"
    />
    <RebusSlide
      image={"/assets/rebus-images/rebus11.png"}
      title="saturday night fever"
    />
    <RebusSlide image={"/assets/rebus-images/rebus12.png"} title="hook" />
    <RebusSlide
      image={"/assets/rebus-images/rebusscnd1.png"}
      title="fifty shades of grey"
    />
  </IonSlides>
);

export default RebusSlidesGroup;
