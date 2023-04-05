import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
// import Image from 'next/image';

const Projects = () => {

  return (
      <Section id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
          {projects.map(({ id, image, title, description, tags, code, visit }) => (
          <BlogCard key={id}  >
            <div>
              <Img src={image} alt="a photo of the landing page" width={300} height={225}/>
            </div>            
            <TitleContent>
              <HeaderThree caption>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map ((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={code} target="_blank">Code</ExternalLinks>
                <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
              </UtilityList>
          </BlogCard>))}
        </GridContainer>
      </Section>
)};

export default Projects;