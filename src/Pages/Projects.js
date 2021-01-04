import projects from "../Assets/projects.jpg"
import ButtonPrimary from "../Components/ButtonPrimary"

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <img src={projects} alt="" />
      <h2>Logs into LinkedIn and searches by keywords automatically</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.</p>
      <ButtonPrimary>See case →</ButtonPrimary>
    </div>
  );
}


export default Projects;