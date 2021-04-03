import { useState } from 'react'
import { ButtonPrimary } from "../../Primitives/Button/ButtonPrimary"
import Card from "./Card"
import styled from '@emotion/styled'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import TestimonialImg from "../../Assets/testimonial.jpg"
import "./Testimonial.css"
import Arrow_left from "../../Assets/arrow_left.svg";
import Arrow_right from "../../Assets/arrow_right.svg";

const TestimonialsFooter = styled.div`
    display: flex;
    justify-content: ${props => !props.justify ? `space-between` : null};
`;
const TestimonialText = [
    {
        imgSrc: TestimonialImg,
        title: "Testimonial 1",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar."
    },
    {
        imgSrc: TestimonialImg,
        title: "Testimonial 2",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar."
    },
    {
        imgSrc: TestimonialImg,
        title: "Testimonial 3",
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.`
    },
    {
        imgSrc: TestimonialImg,
        title: "Testimonial 1",
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.`
    },
    {
        imgSrc: TestimonialImg,
        title: "Testimonial 2",
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.`
    },
    {
        imgSrc: TestimonialImg,
        title: "Testimonial 3",
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.`
    }
]


const TestimonialsContainer = styled.div`
    text-align: center;
    padding-top: 72px;
    padding-bottom: 58px;
    background-color: #f1f1f1;
`
function Testimonials() {
    const [currSlide, setCurrSlide] = useState(0);

    return (
        <TestimonialsContainer>
            <h1>Testimonials</h1>
            <CarouselProvider
                visibleSlides={3}
                totalSlides={6}
                step={1}
                naturalSlideWidth={600}
                naturalSlideHeight={400}
            >
               
                <Slider>
                    {TestimonialText.map(({ imgSrc, title, paragraph }, index) => (
                        <Slide key={index}
                            style={{
                                }}>
                            <Card img={imgSrc} title={title} paragraph={paragraph} />
                        </Slide>
                    ))}
                </Slider>
                <TestimonialsFooter>
                    <ButtonBack className='arrow-back' onClick={() => setCurrSlide(currSlide - 1)}><img src={Arrow_left} alt="" /></ButtonBack>
                    <div style={{ margin: '24px' }}>
                        <ButtonPrimary type="primary">See testimonials →</ButtonPrimary>
                    </div>
                    <ButtonNext className='arrow-forward' onClick={() => setCurrSlide(currSlide + 1)}><img src={Arrow_right} alt="" /></ButtonNext>
                </TestimonialsFooter>


            </CarouselProvider>


        </TestimonialsContainer>

    );
}
export default Testimonials;