import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range a technologies in the web development world.
            From Back-end To Design
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <DiReact size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experiece with <br />
                        React.js <br />
                        Angular<br />Svelte<br />Vue.js<br />Three.js<br />Flutter<br />OOP<br />Java
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiFirebase size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node and Databases<br /> Next.js and Express.js<br />Java Spring<br />.NET and Redux<br />Microservices<br />Blockchain
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiZend size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        tools like Figma<br />Material UI<br />FramerMotion<br />TailwindCSS<br />SASS<br />Boostrap5
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
        <SectionDivider colorAlt />
    </Section>
);

export default Technologies;
