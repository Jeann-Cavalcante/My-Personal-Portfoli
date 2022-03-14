import React, { useState } from "react";

import {
  DiReact,
  DiCss3Full,
  DiJavascript1,
  DiNodejsSmall,
  DiSass,
  DiMongodb,
  DiBootstrap,
  DiFirebase,
} from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTypescript, SiNestjs } from "react-icons/si";

import { Section } from "../../styles/GlobalComponents";

import { CarouselStyle } from "./CarouselStyles";

const Carousel = () => (
  <Section>
    <CarouselStyle>
      <ul>
        <li>
          <AiOutlineHtml5 size="8rem" />
        </li>
        <li>
          <DiCss3Full size="8rem" />
        </li>
        <li>
          <DiSass size="8rem" />
        </li>
        <li>
          <DiBootstrap size="8rem" />
        </li>
        <li>
          <DiJavascript1 size="8rem" />
        </li>
        <li>
          <DiReact size="8rem" />
        </li>
        <li>
          <DiNodejsSmall size="8rem" />
        </li>

        <li>
          <SiTypescript size="8rem" />
        </li>
        <li>
          <DiMongodb size="8rem" />
        </li>
        <li>
          <DiFirebase size="8rem" style={{ margin: "0px", padding: "0px" }} />
        </li>
      </ul>
    </CarouselStyle>
  </Section>
);

export default Carousel;
