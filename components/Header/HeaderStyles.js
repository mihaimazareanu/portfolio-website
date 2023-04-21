import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 2rem 1rem 1rem 1rem;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const StyledSVG = styled.svg`
  width: 32px;
  height: 32px;
  display: block;
  margin: 0 auto;
`;

export const Span = styled.span`
  .${(props) => props.className} {
    font-size: 2rem;
  }

`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const BurgerMenu = styled.div`
  margin-right: 1rem;
  display: none;
  position: relative;

  svg {
    transition: 0.3s ease;
    border-radius: 50px;
    margin-right: 1rem;
    
    &:hover {
      background-color: ${props => props.dark ? "#212d45" : "hotpink" } ;
      transform: scale(1.2);
      cursor: pointer;
  }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const BurgerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0,0, 0,0.2);
  z-index: 10;

  p {
    margin: 1rem 0;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${props => props.theme.colors.boxText};
  transition: 0.4s ease;
  &:hover {
    color: ${props => props.theme.colors.linkHover};
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// DropDown Contact
// export const ContactDropDown = styled.button`
//   border: none;
//   display: flex;
//   position: relative;
//   background: none;
//   font-size: 1.7rem;

//   line-height: 32px;
//   color: rgba(255, 255, 255, 0.75);
//   cursor: pointer;
//   transition: 0.3s ease;

//   &:focus {
//     outline: none;
//   }
//   &:hover {
//     color: #fff; 
//   }

//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 0.4rem 0;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     padding: 0;
//   }
// `;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: ${props => props.theme.colors.linkHover};
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: ${props => props.theme.colors.backgroundHover};
    transform: scale(1.2);
    cursor: pointer;
    
  }
`