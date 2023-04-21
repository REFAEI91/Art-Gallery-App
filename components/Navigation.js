import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {

  const StyledNav = styled.nav`
  width: 30vw;
  `
  
  const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: space-evenly;

    .navLink {
      text-decoration: none;
      color: #2f4f4f;
    }
  `


  return (
    <StyledNav>
      <StyledList>
        <li>
          <Link href="/" className="navLink">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces" className="navLink">Gallery</Link>
        </li>
      </StyledList>
    </StyledNav>
  );
}
