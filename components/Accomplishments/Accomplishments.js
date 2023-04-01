import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

import { AiFillSafetyCertificate } from "react-icons/ai";

const data = [
  { title: "Web Development Bootcamp", text: 'Graduated a Web Development Bootcamp offered by neue fische in Hamburg, Germany'},
];

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <AiFillSafetyCertificate size="3rem"/>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
