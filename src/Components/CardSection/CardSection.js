import React from 'react';
import { ButtonPrimary } from "../../Primitives/Button/ButtonPrimary"
import { ContainerWithLayoutMargin } from "../StyledComponents"
import styled from '@emotion/styled';
import nb1 from '../../Assets/nb1.svg'
import nb2 from '../../Assets/nb2.svg'
import nb3 from '../../Assets/nb3.svg'
import nb4 from '../../Assets/nb4.svg'
import nb5 from '../../Assets/nb5.svg'

const indexImgMap = [nb1, nb2, nb3, nb4, nb5];


const ImgFrame = styled.img(({ smallIcons }) => ({
    width: smallIcons ? '110px' : '100%',
    height: '100%',
    objectFit: 'contain'
}))
const SectionBackground = styled.section(({ greyBg }) => ({
    backgroundColor: greyBg ? '#f1f1f1' : '#fff'
}))

const SectionWrapper = styled.section(({ isReversed }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'relative',
    flexDirection: isReversed && 'row-reverse',
    padding: '72px 0'
}))

const SectionText = styled.div`
    width: 100%;
    height: 100%;
    border: solid;
    display: flex;
    flex-direction: column;
    padding: 0 2rem 0 0;   
`;

const SectionImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
    border: solid;
    background: #fff;
    border: ${props => props.smallIcons ? '12px solid #f1f1f1' : 'none'};
`;
const CardSection = ({
    cardTitle,
    smallIcons,
    cardText,
    cardImgUrl,
    buttonText,
    isReversed,
    greyBg,
    index,
    children
}) => (

    <SectionBackground isReversed={isReversed} greyBg={greyBg}>
        <ContainerWithLayoutMargin>
            <SectionWrapper isReversed={isReversed}>
                <SectionText>
                    <h4>{cardTitle}</h4>
                    <p>{cardText}</p>
                    {buttonText && <ButtonPrimary type="primary">{buttonText}</ButtonPrimary>}
                </SectionText>
                <SectionImage smallIcons={smallIcons}>

                    {(index || index === 0) && <img src={indexImgMap[index]} alt="section number" />}
                    <ImgFrame smallIcons={smallIcons} src={cardImgUrl} alt="section" />
                </SectionImage>
                <div style={{
                    position: 'absolute', bottom: 0, left: '50%',
                    textAlign: 'center', transform: 'translate(-50%, -100%)'
                }}>{children}</div>
            </SectionWrapper>
        </ContainerWithLayoutMargin>
    </SectionBackground>
);

export default CardSection;