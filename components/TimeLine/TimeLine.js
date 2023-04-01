// import { useState, useRef, useEffect } from 'react';

// import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import { TimeLineData } from '../../constants/constants';

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

// const handleClick = (e, i) => {
//   e.preventDefault();
//   if (carouselRef.current) {
//     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
//     scroll(carouselRef.current, scrollLeft);
//     }
//   }

//   const handleScroll = () => {
//     if (carouselRef.current) {
//       const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);
//       setActiveItem(index);
//     }
//   }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>My name is Mihai and I&apos;m based in the beautiful city of Hamburg, Germany. I recently made the exciting transition from a career in transport and logistics to web development. I&apos;ve always had a passion for IT and technology, and I felt that web development would provide me with the perfect opportunity to pursue this passion while challenging myself in new ways. </SectionText>
      <SectionText> I enrolled in a 3-month Web Development Bootcamp and graduated successfully. While I may be relatively new to the industry, I am confident in my abilities as a developer. I am a quick learner and have already demonstrated a strong level of proficiency and expertise in my work. </SectionText>
      <SectionText> Despite being a newcomer, I believe that my diverse background and strong work ethic make me a valuable asset in the field of web development. I&apos;m a creative thinker who pays meticulous attention to detail, and I&apos;m always eager to take on new challenges. </SectionText>
      <SectionText> I am excited about the opportunities that lie ahead in the world of web development. With my skills and drive, I am confident that I have a bright future ahead of me in this field.</SectionText>
      {/* <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem index={index} id={`carousel__item-${index}`} active={activeItem} onClick={()=>{e => handleClick(e, index)}}>
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton key={index} index={index} active={activeItem} onClick={()=>{e => handleClick(e, index)}}>
            <CarouselButtonDot active={activeItem}/>
          </CarouselButton>
        ))}
      </CarouselButtons> */}
    </Section>
  );
};

export default Timeline;
