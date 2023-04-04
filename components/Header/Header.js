import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine, RiXingFill } from "react-icons/ri"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, StyledSVG,Span, Burger, BurgerMenu, BurgerContainer } from './HeaderStyles';

const Header = () =>  {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
  <Container>
    <Div1>
      <Link href="/" style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects" passHref>Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech" passHref>Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about" passHref>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/mihaimazareanu' target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/mihai-mazareanu/' target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.xing.com/profile/Mihai_Mazareanu/cv' target="_blank">
        <RiXingFill size="3rem"/>
      </SocialIcons>
      <BurgerMenu>
      {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
        <BurgerContainer>
          <li>
            <NavLink href="#projects" passHref onClick={() => setToggleMenu(false)}>Projects</NavLink>
          </li>
          <li>
            <NavLink href="#tech" passHref onClick={() => setToggleMenu(false)}>Technologies</NavLink>
          </li>
          <li>
            <NavLink href="#about" passHref onClick={() => setToggleMenu(false)}>About</NavLink>
          </li>
        </BurgerContainer>
      )}
    </BurgerMenu>
    </Div3>
    
  </Container>
)};

export default Header;
