
import ShopifyEcommerce from '../../Assets/shopify_ecommerce.jpg'
import { ContactForm } from '../../Components/ContactForm';
import { H1Text } from '../../Components/HeroCard/style';
import { HeroCard } from '../../Components/HeroCard/HeroCard';
import Testimonials from '../../Components/Testimonial/Testimonials';

const softwareDevEngineeringData = {
    header: {
        beforeHighlight: "Ecommerce Shop",
        highlight: "Implementation"
    },
    description: 'One of our specialities is developing online stores with Shopify. Though we can also develop more complex enterprise shops using suitable frameworks and microservices, we advice  startups with a lean budget to start with Shopify and scale it up, until more complex software is needed.',
    img: ShopifyEcommerce
}

function ECommerceShop() {
    return (
        <>
            <HeroCard
                noBorder
                renderHeader={() => {
                    return <H1Text>
                        {softwareDevEngineeringData.header.beforeHighlight}
                        <span className="txt-highlight">{softwareDevEngineeringData.header.highlight}</span>
                    </H1Text>
                }
                }
                description={softwareDevEngineeringData.description}
                img={softwareDevEngineeringData.img}
            >
                <div>Another child</div>
                <div>Logos</div>
            </HeroCard>
            <Testimonials />
            <ContactForm />
        </>
    );
}


export default ECommerceShop;