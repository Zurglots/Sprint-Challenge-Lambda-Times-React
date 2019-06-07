import React from "react";
import { HeaderContainer, Date, Title, Temp } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Date>SMARCH 32, 2018</Date>
      <Title>Lambda Times</Title>
      <Temp>98°</Temp>
    </HeaderContainer>
  );
};

export default Header;
