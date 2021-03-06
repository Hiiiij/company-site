import software from '../../Assets/software.jpg'
import { ButtonPrimary } from "../../Primitives/Button/ButtonPrimary"

function Engineering() {
  return (
    <div>
      <h1>Engineering</h1>
      <h4>We build state-of-the-art software for different companies, suitable to their needs and budget. Customer satisfaction and optimal user experience is at the forefront of all our decisions.</h4>
      <ButtonPrimary>Learn more →</ButtonPrimary>
      <img src={software} alt="" />
    </div>
  );
}


export default Engineering;