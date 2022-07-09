import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br />
                    My First <br /> Portfolio Website
                </SectionTitle>
                <SectionText>
                    I love to code but I would love a mentorship or on the job experience thats where you come in. I want to become an established developer so I can take my skills to the next level and build awesome apps.
                </SectionText>
                <Button onClick={props.handleClick}>Learn More</Button>
            </LeftSection>
            <SectionDivider />
        </Section>
    </>
);

export default Hero;