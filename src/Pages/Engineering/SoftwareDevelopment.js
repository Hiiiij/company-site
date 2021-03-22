import { TemplateCard } from "../../Components/TemplateCard";
// import Testimonial from "../../Components/Testimonial/Testimonials";
import Software from '../../Assets/Engineering/softwareDev.svg'
import { H1Text, H2Text } from "../../Components/HeroCard/style";
import { ContainerWithLayoutPadding } from "../../Components/StyledComponents";
import Testimonials from "../../Components/Testimonial/Testimonials";
import { CardGrid } from "./CardGrid";
import Neu from '../../Assets/projects.jpg'
import Dots from '../../Assets/dotsSoftwareDev.svg'

const softwareDevEngineeringData = {
  header: {
    beforeHighlight: "Software",
    highlight: "Development"
  },
  description: "We develop modern software for the web, mobile and desktop. We use state-of-the-art technology like React, Node.js, PHP, Symfony, Python, Javascript, etc to create astounding software ultra modern software is one of our core values. We have a balanced team of engineers with 20 years of experience and younger engineers affine to the newest technologies like React and Node.js",
  img: Software
}

const projectCardData = [{
  img: Neu,
  title: "Home24 Backend Engineering"

}, {
  img: Neu,
  title: "Home24 Backend Engineering"

}, {
  img: Neu,
  title: "Home24 Backend Engineering"

}, {
  img: Neu,
  title: "Home24 Backend Engineering"

}, {
  img: Neu,
  title: "Home24 Backend Engineering"

}, {
  img: Neu,
  title: "Home24 Backend EngineeringPE"
}]

function SoftwareDevelopment() {
  return (
    <>
      <ContainerWithLayoutPadding>
        <TemplateCard
          noBorder
          description={softwareDevEngineeringData.description}
          img={softwareDevEngineeringData.img}
          renderLeftSideExtras={() => {
            return (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={Dots} />
                <H1Text className="txt-highlight"> 20+</H1Text>
                <H2Text className="txt-highlight">years of experience</H2Text>
              </div>
            )
          }}
          renderHeader={() => <H1Text>{softwareDevEngineeringData.header.beforeHighlight} <span className="txt-highlight">{softwareDevEngineeringData.header.highlight}</span></H1Text>}
        />

      </ContainerWithLayoutPadding>
      <CardGrid projectCardData={projectCardData} />

      <Testimonials />
    </>
  );
}



export default SoftwareDevelopment;