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
    <RebusSlide
      image={"/assets/rebus-images/rebus2-reduced.png"}
      title="robin hood"
    />
    <RebusSlide
      image={"/assets/rebus-images/rebus3-reduced.png"}
      title="ghost"
    />
    <RebusSlide
      image={"/assets/rebus-images/rebus4-reduced.png"}
      title="the lion king"
    />
    <RebusSlide
      image={"/assets/rebus-images/rebus5-reduced.png"}
      title="braveheart"
    />
    <RebusSlide
      image={"/assets/rebus-images/rebus9-reduced.png"}
      title="the blair witch project"
    />
    <RebusSlide
      image={"/assets/rebus-images/rebus11-reduced.png"}
      title="saturday night fever"
    />
    <RebusSlide
      image={"/assets/rebus-images/rebus12-reduced.png"}
      title="hook"
    />
    <RebusSlide
      image={"/assets/rebus-images/rebusscnd1-reduced.png"}
      title="fifty shades of grey"
    />
  </IonSlides>
);

export default RebusSlidesGroup;
