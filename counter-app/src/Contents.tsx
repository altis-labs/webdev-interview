import styled from "styled-components";
import React, {useState} from "react";
import {Buttons} from "./Buttons";
import {Card} from "./Card";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: gray;
`

interface ContentsProps {
    count: number;
    setCount: (count: number) => void;
    onReset: () => void;
}

export function Contents({count, setCount, onReset}: ContentsProps): JSX.Element {
    const handleButtonClicked = () => {
        setCount(count + 1)
    }

    const handleResetClicked = () => {
        onReset()
    }

    const message = getMessage(count);

    return <
        Wrapper>
        <Card>
            {message}
            <Buttons onReset={handleResetClicked} onClicked={handleButtonClicked} count={count}/>
        </Card>
    </Wrapper>
}


function getMessage(count: any): any {
    if (count === 0) {
        return "Click the button!";
    } else if (count === 1) {
        return `Clicked ${count} times`
    } else {
        return `Clicked ${count} times`
    }
}