import { CSSProperties } from "react";
import styled from "styled-components";
import { getMessage } from "./common";
// Unused imports may be removed

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

    const displayNumber = doImportantMath(count) // semicolons may be omitted in almost all cases
    const message = getMessage(displayNumber)

    // Do not use multiline styles inline 
    // Within component, they are complex enough
    const innerDivStyle : CSSProperties  = {
        padding: "24px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        borderRadius: "12px"
    }

    return <Wrapper>
        <div style={innerDivStyle}>
            {message}
        </div>
    </Wrapper>
}

// Please add a test for this important mathematical computation. 
// The fate of many businesses could be depending on it
function doImportantMath(count: number): number {
    return count + 3 * Math.pow(count, 2);
}
