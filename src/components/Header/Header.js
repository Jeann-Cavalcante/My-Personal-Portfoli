import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://github.com/Jeann-Cavalcante"
        target="_blank"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/jean-cavalcante-296245149/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://api.whatsapp.com/send?phone=5511995985952"
        target="_blank"
      >
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
