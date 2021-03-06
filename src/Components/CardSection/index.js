import React from 'react';

// import { Button } from '../../Primitives';
import { ButtonPrimary } from "../../Primitives/Button/ButtonPrimary"
import styled from '@emotion/styled';
import { ImgFrame } from '../../Primitives/Img/Img';
import nb1 from '../../Assets/recruitingPage/nb1.svg'
import nb2 from '../../Assets/recruitingPage/nb2.svg'
import nb3 from '../../Assets/recruitingPage/nb3.svg'
import nb4 from '../../Assets/recruitingPage/nb4.svg'
import nb5 from '../../Assets/recruitingPage/nb5.svg'

const indexImgMap = [ nb1, nb2, nb3, nb4, nb5 ];

const StyledSection = styled.section(({ isReversed, greyBg }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: greyBg ? '#e3e3e3' : '#fff',
    position: 'relative',
    flexDirection: isReversed && 'row-reverse'
}))

const SectionText = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    
`;

const SectionImage = styled.div`
    width: 100%;
    height: 100%;
`;
const CardSection = ({
    cardTitle,
    cardText,
    cardImgUrl,
    buttonText,
    isReversed,
    greyBg,
    index,
    children
}) => (
    <StyledSection isReversed={isReversed} greyBg={greyBg}>
        
        <SectionText>
            <h4>{cardTitle}</h4>
            <p>{cardText}</p>
            <ButtonPrimary type="primary">{buttonText}</ButtonPrimary>
        </SectionText>
        <SectionImage>
            {(index || index === 0) && <img src={indexImgMap[index]} alt="section number" />}
            <ImgFrame src={cardImgUrl} alt="section" />
        </SectionImage>
        <div style={{
            position: 'absolute', bottom: 0, left: '50%',
            textAlign: 'center', transform: 'translate(-50%, -100%)'
        }}>{children}</div>
        {/* <Card>
            <Img />
            <Button type="secondary">Blah</Button>
        </Card> */}
    </StyledSection>
);

export default CardSection;