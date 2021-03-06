import React from 'react';

import { Container } from './style';

function HeroCard({ introImg }) {
    return (
        <Container>
            <div>
                <h1 className="txt-hero">Realize your vision with our <span className="txt-highlight">out-of-the-box recruiting</span></h1>
                <h4 className="sub-txt">Our recruiting concept is revolutionary in that we have engineers recruiting engineers for you - designers recruiting designers, product experts recruiting other product people. We found out that experts in a field can spot another expert faster than regular recruiting by pshycology and business majors. Our project case studies are living proof.</h4>
            </div>
            <div>
                <img src={introImg} alt="" />
            </div>
        </Container>
    );
}

export default HeroCard;