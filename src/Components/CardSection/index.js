import React from 'react';

// import { Button } from '../../Primitives';
import { ButtonPrimary } from "../../Primitives/Button/ButtonPrimary"
import styled from '@emotion/styled';
import { ImgFrame } from '../../Primitives/Img/Img'

const StyledSection = styled.section(props => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: props.isReversed ? '#e3e3e3' : '#fff',
    border: 'solid 1px ' + props.borderColor,
    position: 'relative'
}))

const LeftDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;

const RightDiv = styled.div`
    width: 100%;
    height: 100%;
`;
const CardSection = ({
    cardTitle,
    cardText,
    cardImgUrl,
    buttonText,
    isReversed,
    children
}) => (
    <StyledSection isReversed={isReversed} borderColor="pink">
        {!isReversed && <LeftDiv>
            <h4>{cardTitle}</h4>
            <p>{cardText}</p>
            <ButtonPrimary type="primary">{buttonText}</ButtonPrimary>
        </LeftDiv>}
        <RightDiv>
            <ImgFrame src={cardImgUrl} alt="section" />
        </RightDiv>
        {isReversed && <LeftDiv>
            <h4>{cardTitle}</h4>
            <p>{cardText}</p>
            <ButtonPrimary type="primary">{buttonText}</ButtonPrimary>
        </LeftDiv>}
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