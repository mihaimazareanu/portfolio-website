import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiXingFill } from "react-icons/ri";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, StyledSVG,Span } from './HeaderStyles';

const Header = () =>  (
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
    </Div3>
  </Container>
);

export default Header;
