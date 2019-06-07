import React from "react";
import {
  TopBarWrap,
  TopBarContainer,
  TopLeft,
  TopLeftSpan,
  TopCenterContainer,
  TopCenterSpan,
  TopContainerRight,
  TopRightSpan
} from "./styles";

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
          <TopRightSpan>LOG IN</TopRightSpan>
        </TopContainerRight>
      </TopBarContainer>
    </TopBarWrap>
  );
};

export default TopBar;
