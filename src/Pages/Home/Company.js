import "./company.css"

function Company() {
  return (
    <>
    <div className="container">
      <div className="chunk">
        <div>
          <h1>We’re software engineers and UX designers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar.</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/192x155" className="img-max" alt="" />
        </div>
      </div>
      <div className="chunk">
        <div>
          <img src="https://via.placeholder.com/494x513" className="img-max" alt="" />
        </div>
        <div className="list">
          <div>
            <h3>Honesty & Responsibility</h3>
            <p>We don’t aim to know everything. But what we do know, we know well, and use it to build trust through honesty and quality delivery.</p>
          </div>
          <div>
            <h3>Technology & Simplicity</h3>
            <p>A technological revolution shouldn’t equate to complication. We develop intuitive, self-explaining software, so that your user immediately feels the added value.</p>
          </div>
        </div>
      </div>
      <div className="team">
        <h2> The Team</h2>
        <p>Our developer roots are the fruit of MIMUW: the best computer science university in Poland and one of the top 5 in the world. Since the 70s, the faculty is ranked #1 in Poland and is consistently ranked in the TOP 5 in the World’s most reputable team programming contests.</p>
      </div>
      <div className="team-members">
        <ul>
          <li>
            <img src="https://via.placeholder.com/334x455" className="img-max" alt="" />
            <strong>Michael Rissmann</strong>
            <p>Engineering Director</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/334x455" className="img-max" alt="" />
            <strong>Vladmir Horvat</strong>
            <p>Engineering Manager IT</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/334x455" className="img-max" alt="" />
            <strong>Andrei Nasonov</strong>
            <p> UX/UI Designer</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/334x455" className="img-max" alt="" />
            <strong>Edgar Bongkishiy</strong>
            <p>Managing Director</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/334x455" className="img-max" alt="" />
            <strong>Bernadetta Nycz</strong>
            <p>Junior Developer</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/334x455" className="img-max" alt="" />
            <strong>Itumeleng Kekane</strong>
            <p>Junior Developer</p>
          </li>
        </ul>

      </div>
    </div>
    <div className="with-background">
      <div className="container">
      <div className="working">
        <h2>What it’s like working with us</h2>
        <p>Before telling us what you need, we like to spend the time to get to know why you need it. This genuine interest can help flesh out a more-complete solution by combining nearly 20 years of UX design experience, technical know-how, and quality standards.</p>
      </div>
      </div>
    </div>
    </>
  );
}


export default Company;