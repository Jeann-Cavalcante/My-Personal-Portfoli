import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Jean <br />
          Cavalcante
        </SectionTitle>
        <SectionText>
        Desenvolvedor Full Stack, focado em tecnologias modernas e com foco em desenvolvimento de software.
        </SectionText>
        <Button onClick={props.handleClick}>Curriculo</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;