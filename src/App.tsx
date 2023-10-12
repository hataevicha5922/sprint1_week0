import React from "react";

import { Wrapper } from "./components/Wrapper.styled";
import { Card } from "./components/Card.styled";
import { Img } from "./components/Img.styled";
import { Title } from "./components/Title.styled";
import { Text } from "./components/ Text.styled";
import { Buttton } from "./components/Button.styled";
import { SaveButton } from "./components/SaveButton.styled";
import { WrapperButton } from "./components/WrapperButton.styled";
import rectangle from "./images/Rectangle.png";

function App() {
  return (
    <Wrapper>
      <Card>
        <Img src={rectangle} alt="Image" />
        <Title>Headline</Title>
        <Text>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </Text>
        <WrapperButton>
          <Buttton>See more</Buttton>
          <SaveButton>Save</SaveButton>
        </WrapperButton>
      </Card>
    </Wrapper>
  );
}

export default App;
