// unused import of React may be removed
import styled from "styled-components";
// remove commented code

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
    
    // 1. removed commented code
    // 2. methods which are only a single line may omit line breaks and brackets
    // 3. handleResetClicked may be adjusted to be a 
    const handleButtonClicked = () => onClicked()
    const handleResetClicked = () => onReset()

    // 4. Use a more descriptive name for the button
    // 5. Declare the two buttons in a consistent way
    const resetButton = <Button onClick={handleResetClicked}>Reset</Button>
    const clickButton = <Button onClick={handleButtonClicked}>Click me</Button>

    // 6. wrap in round brackets so both <Wrapper> declarations may have same indentation
    return (
        <Wrapper>
            {clickButton}
            {count ? resetButton : null}
        </Wrapper>
    )
}