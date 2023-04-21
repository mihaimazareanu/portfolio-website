import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-right: 3rem;
`

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0.5rem 0.75rem;
`;

export const SwitchInput = styled.input`
  display: none;
`;

export const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${(props) =>
      props.checked ? "#2bc6ff" : "#FF4820"};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.5s ease;

  &::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: ${props => props.theme.colors.switch};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: translateX(${(props) => (props.checked ? "25px" : "0")});
  }
`;