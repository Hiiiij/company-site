import React from 'react';

import { Container } from './style';

function HeroCard({ introImg, renderHeader, rightSideExtras }) {
    return (
        <Container>
            <div>
                {renderHeader}
                <h4 className="sub-txt">Our recruiting concept is revolutionary in that we have engineers recruiting engineers for you - designers recruiting designers, product experts recruiting other product people. We found out that experts in a field can spot another expert faster than regular recruiting by pshycology and business majors. Our project case studies are living proof.</h4>
            </div>
            <div>
                <img src={introImg} alt="" />
                {rightSideExtras}
            </div>
        </Container>
    );
}

export default HeroCard;