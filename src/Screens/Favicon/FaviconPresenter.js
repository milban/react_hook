import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import HelpImg from "../../Assets/Favicon.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 200px;
  background-image: url(${props => props.bgImg});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Input = styled.input`
  border: none;
  font-size: 2rem;
  &:focus {
    outline: none;
  }
  margin-bottom: 2rem;
`;

const FaviconPresenter = ({ value, onChange }) => (
  <Container>
    <Helmet>
      <link rel="shortcut icon" href={value} />
    </Helmet>
    <Input
      placeholder="Input your favicon url"
      vlaue={value}
      onChange={onChange}
      type="text"
      autofocus
    />
    <span>Copy and Paste below Example</span>
    <span>https://image.flaticon.com/icons/png/512/87/87390.png</span>
    <ImgBox bgImg={HelpImg} />
  </Container>
);

export default FaviconPresenter;
