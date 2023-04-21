import { ThemeContext } from "@/contexts/ThemeContext";
import React, { useContext, useState } from "react";
import { Container, SwitchInput, SwitchSpan, ToggleSwitch } from "./SwitchStyles";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

function Switch() {
  const [isToggled, setIsToggled] = useState(false);
  const {toggleTheme} = useContext(ThemeContext)

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <Container>
        <BsFillSunFill />
        <ToggleSwitch>
            <SwitchInput type="checkbox" checked={isToggled} onChange={onToggle} />
            <SwitchSpan checked={isToggled}/>
        </ToggleSwitch>
        <BsFillMoonFill />
    </Container>
  );
}
export default Switch;
