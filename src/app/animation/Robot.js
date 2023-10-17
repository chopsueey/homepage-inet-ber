import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import RobotBot3D from "../../../public/Robot-Bot-3D-Mikhail-Voloshin.json";

export default function Robot() {
  return (
    <Lottie
      loop
      animationData={RobotBot3D}
      play
      style={{ width: 400, height: 400 }}
    />
  );
}
