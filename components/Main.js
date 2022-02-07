import styled from "styled-components";
import React from "react";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Main = () => {
  return (
    <Wrapper>
      <Portfolio />
      <Promos />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 82px);
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 1rem;
  ::-webkit-scrollbar {
    display: none;
  }

  & div {
    border-radius: 0.4rem;
  }
`;
