import React from "react";
import {
  TopBarWrap,
  TopBarContainer,
  TopLeft,
  TopLeftSpan,
  TopCenterContainer,
  TopCenterSpan,
  TopContainerRight
} from "./styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarWrap>
      <TopBarContainer>
        <TopLeft>
          <TopLeftSpan>TOPICS</TopLeftSpan>
          <TopLeftSpan>SEARCH</TopLeftSpan>
        </TopLeft>
        <TopCenterContainer>
          <TopCenterSpan>GENERAL</TopCenterSpan>
          <TopCenterSpan>BROWNBAG</TopCenterSpan>
          <TopCenterSpan>RANDOM</TopCenterSpan>
          <TopCenterSpan>MUSIC</TopCenterSpan>
          <TopCenterSpan>ANNOUNCEMENTS</TopCenterSpan>
        </TopCenterContainer>
        <TopContainerRight>
          <span>LOG IN</span>
        </TopContainerRight>
      </TopBarContainer>
    </TopBarWrap>
  );
};

export default TopBar;
