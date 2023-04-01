import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  return (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Welcome To <br /> My Personal Portfolio</SectionTitle>
      <SectionText>I am a web developer with a passion for crafting beautiful, functional websites. I believe in creating user-friendly experiences that engage and delight visitors. Through my portfolio, you will find a showcase of my skills and expertise, including examples of websites I have designed and developed. My goal is to help businesses and individuals build an online presence that accurately reflects their brand and values. I invite you to explore my portfolio and discover how I can help bring your website to life.</SectionText>
      <Button onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Learn More</Button>
    </LeftSection>
  </Section>
)}

export default Hero;