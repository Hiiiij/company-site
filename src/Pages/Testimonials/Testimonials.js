import styled from '@emotion/styled';
import Dots from "../../Assets/dots.svg"
import TestimonialPage from "../../Assets/testimonialPage.jpg"
import TestimonialImg from "../../Assets/testimonial.jpg"
import { ContactForm } from '../../Components/ContactForm';

const GreyBackground = styled.div`
background: #F1F1F1;
position: relative;
&:after {
    position:absolute;
    top: 0;
    left: 0;
    background:url(${Dots});
}
`

const TestimonialsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`


const Testimonial = styled.div`
    background: white;
    width: 30%;
    margin-bottom: 30px 0;
`

const TestimonialHeader = styled.div`
    display: flex
`


const Testimonials = () => {
    return (
        <>
            <div className='container'>
                <TestimonialHeader>
                    <div>
                        <h1>What people say <span className="txt-highlight">about us</span></h1>
                    </div>
                    <img src={TestimonialImg} alt="" />
                </TestimonialHeader>
            </div>
            <GreyBackground>
                <div className='container'>
                    <TestimonialsWrapper>
                        {Array(6).fill(null).map((item, index) => {
                            return (<Testimonial key={index}>
                                <TestimonialHeader>
                                    <img src={TestimonialPage} alt="" />
                                    <div>
                                        <p className="txt-bold">Alexandra Mustermann</p>
                                        <p>CEO at Startup GmbH Berlin, Germany</p>
                                    </div>
                                </TestimonialHeader>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.</p>
                                <p><a href="/Reruiting">Reruiting</a></p>
                            </Testimonial>)
                        })}
                    </TestimonialsWrapper>
                </div>
            </GreyBackground>
            <ContactForm light />
        </>
    )
}

export default Testimonials