import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiXingFill } from "react-icons/ri"

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:mihai.mazareanu@gmail.com'>mihai.mazareanu@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/mihaimazareanu' target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://https://www.linkedin.com/in/mihai-mazareanu/' target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.xing.com/profile/Mihai_Mazareanu/cv' target="_blank">
        <RiXingFill size="3rem"/>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
