import styled from "styled-components";
import {Card} from "./Card";

const Wrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 0px;
`

interface OverlayProps {
    count: number;
}

export function Overlay({count}: OverlayProps): JSX.Element {
    const displayNumber = doImportantMath(count);

    const message = getMessage(displayNumber)

    return <Wrapper>
        <div style={{
            padding: "24px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            borderRadius: "12px"
        }}>
            {message}
        </div>
    </Wrapper>
}

function doImportantMath(count: number): number {
    return count + 3 * Math.pow(count, 2);
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