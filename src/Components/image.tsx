import React from "react";
import landingImage from "../Assets/landing-image.svg";
export default function LandingImage() {
  return (
    <>
      <img
        src={landingImage}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </>
  );
}
