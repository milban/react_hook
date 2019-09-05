import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  padding: 2rem 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Item = styled.li`
  font-size: ${props => (props.seleted ? "1.5rem" : "1rem")};
  font-weight: ${props => (props.seleted ? "600" : "400")};
`;

export default withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      <List>
        <Item seleted={pathname === "/"}>
          <Link to="/">Home</Link>
        </Item>
        <Item seleted={pathname === "/DeviceOrientation"}>
          <Link to="/DeviceOrientation">DeviceOrientation</Link>
        </Item>
      </List>
    </Header>
  );
});
