import React from 'react';

import cardData from '../../dummydata/engineeringCardSection';
import Testimonials from '../../Components/Testimonial/Testimonials';
import { ContactForm } from '../../Components/ContactForm';
import CardSection from '../../Components/CardSection';
import { TemplateCard } from "../../Components/TemplateCard";
import { H1Text } from "../../Components/HeroCard/style";
import Wave from '../../Assets/Engineering/wave.svg'
import { ContainerWithLayoutPadding } from '../../Components/StyledComponents';

const imageHeroStyles = {
    alignItems: 'flex-start',
    paddingTop: '60px',

}

const Engineering = () => {
    const [header, ...cards] = cardData;
    return (
        <>
            <ContainerWithLayoutPadding>
                <TemplateCard
                    noBorder
                    img={header.img}
                    renderHeader={() => <H1Text>{header.header.beforeHighlight} <div className="txt-highlight">{header.header.highlight}</div><br />{header.header.afterHighlight}</H1Text>}
                    renderRightSideExtras={() => <img src={Wave} />}
                    description={header.description}
                    imgWrapperStyles={imageHeroStyles}
                />
            </ContainerWithLayoutPadding>
            {
                cards.map(({ title, text, imgUrl, buttonText, }, index) => (
                    <CardSection
                        key={title}
                        cardTitle={title}
                        cardText={text}
                        cardImgUrl={imgUrl}
                        buttonText={buttonText}
                        isReversed={index % 2 !== 0}
                        greyBg={index % 2 === 0}
                    />
                ))
            }
            <Testimonials />
            <ContactForm />
        </>
    )
}

export default Engineering