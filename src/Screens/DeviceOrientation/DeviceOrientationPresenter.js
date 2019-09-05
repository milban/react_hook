import React from "react";
import styled from "styled-components";
import HelpImg1 from "../../Assets/DeviceOrientationHelp1.png";
import HelpImg2 from "../../Assets/DeviceOrientationHelp2.png";
import HelpVideo from "../../Assets/DeviceOrientationHelpVideo.mov";

const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${props => props.bgImg});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const HelpContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeviceOrientationPresenter = ({ alpha, beta, gamma }) => (
  <Container>
    <div>{`Alpah: ${alpha || "Null"}`}</div>
    <div>{`Beta: ${beta || "Null"}`}</div>
    <div>{`Gamma: ${gamma || "Null"}`}</div>
    <HelpContainer>
      <span>How to?</span>
      <span>
        If you're watching on a mobile device, you'll see it right away!!
      </span>
      <span>But with Computer...</span>
      <span>MacOS : option + command + i</span>
      <span>Window : Ctrl + Shift + i</span>
      <div role="img" aria-label="arrow">
        ⬇️
      </div>
      <ImgBox bgImg={HelpImg1} />
      <div role="img" aria-label="arrow">
        ⬇️
      </div>
      <ImgBox bgImg={HelpImg2} />
      <video width="500px" src={HelpVideo} controls />
    </HelpContainer>
  </Container>
);

export default DeviceOrientationPresenter;
