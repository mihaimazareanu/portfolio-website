import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Welcome To <br /> My Personal Portfolio</SectionTitle>
      <SectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem, recusandae pariatur tempora hic ut neque? Recusandae assumenda tenetur iste quidem, impedit explicabo, molestias quod, expedita numquam repellendus necessitatibus rem deserunt. Cupiditate consequatur sunt possimus dolorem pariatur magnam qui laborum! Minus quisquam voluptate amet eum repudiandae assumenda voluptas laudantium consectetur.</SectionText>
      <Button onCLick={()=> window.location = "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;