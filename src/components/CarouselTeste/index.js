import React, { useState } from "react";

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Section } from "../../styles/GlobalComponents";

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

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Teste() {
  return (
    <Section>
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <item>
            <AiOutlineHtml5 size="8rem" />
          </item>
          <item>
            <DiCss3Full size="8rem" />
          </item>
          <item>
            <DiJavascript1 size="8rem" />
          </item>
          <item>
            <DiReact size="8rem" />
          </item>
          <item>
            <DiBootstrap size="8rem" />
          </item>
          <item>
            <DiSass size="8rem" />
          </item>
          <item>
            <DiNodejsSmall size="8rem" />
          </item>
          <item>
            <SiTypescript size="8rem" />
          </item>
          <item>
            <DiMongodb size="8rem" />
          </item>
          <item>
            <DiFirebase size="8rem" />
          </item>
        </Carousel>
      </div>
    </div>
    </Section>
  );
}
export default Teste;
