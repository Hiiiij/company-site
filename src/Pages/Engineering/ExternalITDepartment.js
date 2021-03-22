import { ContactForm } from "../../Components/ContactForm";
import MainPic from "../../Assets/Engineering/MainPic.svg"
import CardSection from '../../Components/CardSection';
import Testimonials from '../../Components/Testimonial/Testimonials.js'
import { TemplateCard } from "../../Components/TemplateCard";
import { H1Text } from "../../Components/HeroCard/style";
import Dots from '../../Assets/Engineering/dotsExternalIt.svg'
import styled from '@emotion/styled'
import { ContainerWithLayoutPadding } from "../../Components/StyledComponents";

const DotsContainer = styled.div`
display:flex;
justify-content:center;
background: #f1f1f1
`

const engineeringSections = [
  {
    header: {
      highlight: "External IT",
      afterHighlight: "Department"
    },
    description: "As an external IT department of any company we can implement all IT processes ranging from VPN installation, server installation and configuration, email address and domain management, cloud storage installation and configuration",
    img: MainPic,
  },
  {
    title: 'IT Security: VPN, Firewall, ...',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar. Mauris auctor et velit.',
    imgUrl: MainPic,
  },
  {
    title: 'Email Setup',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar. Mauris auctor et velit.',
    imgUrl: MainPic
  },
  {
    title: 'Cloud Storage',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar. Mauris auctor et velit.',
    imgUrl: MainPic,
  },
  {
    title: 'Company Wiki Setup',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar. Mauris auctor et velit.',
    imgUrl: MainPic,
  },
  {
    title: 'Operating Systems & Hardware',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar. Mauris auctor et velit.',
    imgUrl: MainPic,
  }
];


function ExternalITDepartment() {
  const [header, ...card] = engineeringSections

  return (
    <>
      <ContainerWithLayoutPadding>
        <TemplateCard
          noBorder
          img={header.img}
          renderLeftSideExtras={() => header.hasButton && <p>insert  button here</p>}
          renderRightSideExtras={() => header.hasWave && <p> Insert wave here</p>}
          renderHeader={() => <H1Text>{header.header.beforeHighlight} <div className="txt-highlight">{header.header.highlight}</div>{header.header.afterHighlight}</H1Text>}
          description={header.description}
        />
        {card.map(({ title, text, imgUrl }, index) => (
          <CardSection
            smallIcons
            key={title}
            cardTitle={title}
            cardText={text}
            cardImgUrl={imgUrl}
            isReversed={index % 2 !== 0}
            greyBg={index % 2 === 0}
          />
        ))}
        <DotsContainer>
          <img src={Dots} alt='' />
        </DotsContainer>
        <Testimonials />
        <ContactForm />
      </ContainerWithLayoutPadding>
    </>
  );
}
export default ExternalITDepartment;