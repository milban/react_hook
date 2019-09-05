import React, { useState } from "react";
import DeviceOrientationPresenter from "./DeviceOrientationPresenter";

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState(null);
  const [beta, setBeta] = useState(null);
  const [gamma, setGamma] = useState(null);
  const handleOrientation = event => {
    setAlpha(event.alpha);
    setBeta(event.beta);
    setGamma(event.gamma);
  };
  window.addEventListener("deviceorientation", handleOrientation, true);
  return {
    alpha,
    beta,
    gamma
  };
};

const DeviceOrientationContainer = () => {
  const { alpha, beta, gamma } = useDeviceOrientation();
  return <DeviceOrientationPresenter alpha={alpha} beta={beta} gamma={gamma} />;
};

export default DeviceOrientationContainer;
