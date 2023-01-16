import styled from "styled-components";
// These imports may all be removed
import {Buttons} from "./Buttons";
import {Card} from "./Card";
import {getMessage} from "./common";

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