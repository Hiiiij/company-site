import software from '../Assets/software.jpg'
import recruitment from '../Assets/it_recruitment.jpg'
import shopify from '../Assets/shopify_ecommerce.jpg'


export const homeCardHeroData = {
    header: {
        highlight: "Realize your vision with our",
        afterHighlight: "state-of-the-art software engineering"
    },
    description: "Building ultra modern software is one of our core values. We have a balanced team of engineers with 20 years of experience and younger engineers affine to the newest technologies like React and Node.js",
    img: recruitment,
};

export const homeCardSections = [
    
    {
        title: "Engineering",
        text: "We build state-of-the-art software for different companies, suitable to their needs and budget. Customer satisfaction and optimal user experience is at the forefront of all our decisions.",
        imgUrl: software,
        buttonText: "Learn more →",
        hasWave: true
    },
    {
        title: "IT-Recruitment",
        text: "We found out that getting engineers with advanced soft skills, to hire other engineers for companies is extremely efficient. So all our recruiters are knowledgeable in the fields they hire in. Engineers hire engineers, Designers hire other designers and so on.",
        imgUrl: recruitment,
        buttonText: "Learn more →",
        hasWave: false
    },
    {
        title: "Shopify e-commerce",
        text: "Shopify is our go-to e-commerce system to build small online stores. This is a great solution for a business which starts small and begins to scale. On reaching the limits of Shopify we provide other solutions.",
        imgUrl: shopify,
        buttonText: "Learn more →",
        hasWave: false
    }
]

