import React from "react";
import styled from "styled-components";
// import axios from "axios"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  min-width: 200px;
`;

const Button = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 6px;
  width: 72px;
  background: lightseagreen;
  color: white;
  cursor: pointer;
`;

interface ButtonsProps {
    onClicked: () => void;
    onReset: () => void;
    count: number;
    setCount?: (count: number) => void;
}

export function Buttons({onClicked, onReset, count, setCount}: ButtonsProps): JSX.Element {
    const handleButtonClicked = () => {
        onClicked()
    }

    const handleResetClicked = async () => {
        onReset()

        // console.log("Grab from server")
        // const result = await axios.get('https://altislabs.com')
    }

    const a = count ? <Button onClick={handleResetClicked}>Reset</Button> : null;

    return <Wrapper>
        <Button onClick={handleButtonClicked}>Click me</Button>
        {a}
    </Wrapper>
}