import React, { useContext } from 'react';
import { DiMongodb, DiReact } from 'react-icons/di';
import { FiFigma } from "react-icons/fi"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { ThemeContext } from '@/contexts/ThemeContext';

const Technologies = () =>  {
  const {isDarkTheme} = useContext(ThemeContext)

  return (
  <Section id="tech">
    <SectionDivider dark={isDarkTheme}/>
    <SectionTitle dark={isDarkTheme}>Technologies</SectionTitle>
    <SectionText>I have worked with a range of technologies in the web development world, from Front End to Back End and even Design.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>Experience with React.js and Next.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>Experience with Node.js and MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with Figma</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)};

export default Technologies;
