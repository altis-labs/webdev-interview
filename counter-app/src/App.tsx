import React, {useState} from 'react';
import styled from 'styled-components';
import {Contents} from "./Contents";
import {Overlay} from "./Overlays";

const Page = styled.div`
  height: 100vh;
`

export function App(): JSX.Element {
    const [count, setCount] = useState<number>(0)

    const handleReset = () => {
        setCount(0)
    }

    return (
        <Page>
            <Overlay count={count}/>
            <Contents count={count} setCount={setCount} onReset={handleReset}/>
        </Page>
    );
}

