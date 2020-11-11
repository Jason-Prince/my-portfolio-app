import { text } from "@fortawesome/fontawesome-svg-core";

const home = () => {
  return (
    <div className="body">
      <div className="row">
        {/* intro */}
        <div className="section">
          <div>Jason Prince</div>
          <div>Full Stack Web Developer</div>
        </div>
        {/* projects */}
        <div className="section">Projects</div>
        {/* cooking with react */}
        <div className="card">
          <div className="content--center">
            <img
              src="https://via.placeholder.com/400"
              alt="cooking with react"
            />
          </div>
          <div className="content">
            <a
              className="link__container"
              href="https://reciepes.netlify.app/"
              target="_blank"
            >
              <i className="fas fa-link"></i>
              <div>Live Demo</div>
              <i className="fas fa-external-link-alt icon--small"></i>
            </a>
            <div className="content--left">
              <span>Coolking with React</span>
              <span>All about cooking with react</span>
            </div>
            <a
              className="link__container"
              href="https://github.com/Jason-Prince/Cooking-With-React"
              target="_blank"
            >
              <i className="fab fa-github"></i>
              <div>Github Repository</div>
              <i className="fas fa-external-link-alt icon--small"></i>
            </a>
          </div>
        </div>
        {/* pixabay image search */}
        <div className="card">
          <div className="content--center">
            <img
              src="https://via.placeholder.com/400"
              alt="pixabay image search"
            />
          </div>
          <div className="content">
            <a
              className="link__container"
              href="https://image-search-pixabay.netlify.app/"
              target="_blank"
            >
              <i className="fas fa-link"></i>
              <div>Live Demo</div>
              <i className="fas fa-external-link-alt icon--small"></i>
            </a>
            <div className="content--left">Pixabay Image Search</div>
            <a
              className="link__container"
              href="https://github.com/Jason-Prince/image-gallery"
              target="_blank"
            >
              <i className="fab fa-github"></i>
              <div>Github Repository</div>
              <i className="fas fa-external-link-alt icon--small"></i>
            </a>
          </div>
        </div>
        {/* web portfolio */}
        <div className="card">
          <div className="content--center">
            <img src="https://via.placeholder.com/400" alt="web portfolio" />
          </div>
          <div className="content">
            <a className="link__container" href="#" target="_blank">
              <i className="fas fa-link"></i>
              <div>Live Demo</div>
              <i className="fas fa-external-link-alt icon--small"></i>
            </a>
            <div className="content--left">
              Portfolio Site I needed a place to showcase my projects. I used a
              next js framework and hosted from vercel. Styling in sass with a
              grid display and organized with bem. Icons are svg and came from
              fontawesome.
            </div>
            <a className="link__container" href="#" target="_blank">
              <i className="fab fa-github"></i>
              <div>Github Repository</div>
              <i className="fas fa-external-link-alt icon--small"></i>
            </a>
          </div>
        </div>
        {/* accomplishments */}
        <div className="section">Accomplishments</div>
        <div className="card">
          <div className="content">
            <div className="content--left">DOD Security Clearance</div>
            <div className="content--left content--padding-left">Secret</div>
            <div className="content--left">Lambda School</div>
            <div className="content--left content--padding-left">
              Full Stack Web Developer
            </div>
            <div className="content--left">University of Phoenix</div>
            <div className="content--left content--padding-left">
              Bachelor of Science in Information Technology
            </div>
          </div>
        </div>
        {/* contact me */}
        <div className="section">Contact Me</div>
        <div className="contact-me">
          <a
            className="github__profile"
            href="https://github.com/jason-prince"
            target="_blank"
          >
            {/* <i className="fab fa-github-square github__icon"></i> */}
            <img className="github__icon" src="/github.png" alt="github logo" />
            <div className="github__text">Github Profile</div>
            <i className="fas fa-external-link-alt external-link__icon"></i>
          </a>
          <a
            className="linkedin__profile"
            href="https://www.linkedin.com/in/jason-c-prince/"
            target="_blank"
          >
            {/* <i className="fab fa-linkedin linkedin__icon"></i> */}
            <img
              className="linkedin__icon"
              src="/linkedIn.png"
              alt="linkedin logo"
            />
            <div className="linkedin__text">Linkedin Profile</div>
            <i className="fas fa-external-link-alt external-link__icon"></i>
          </a>
          <div className="phone">
            {/* <i className="fas fa-phone-square-alt phone__icon"></i> */}
            <img
              className="phone__icon"
              src="/google_voice_96dp.png"
              alt="phone"
            />
            <div className="phone__number">(415) 498-0783</div>
            <i className="far fa-copy copy__icon"></i>
          </div>
          <div className="email">
            {/* <i className="fas fa-envelope-square email__icon"></i> */}
            <img className="email__icon" src="/gmail.png" alt="gmail logo" />
            <div className="email__address">jason.c.prince@gmail.com</div>
            <i className="far fa-copy copy__icon"></i>
          </div>
        </div>
        {/* footer */}
        <div className="card">
          <div className="content--center">copyright jason prince</div>
        </div>
      </div>
    </div>
  );
};

export default home;

/*
name / title
pro1
pro2
pro3
accomplishments
contact me
*/

{
  /* <div className="section yellow">min: 150px / max: 25%</div>
<div className="section purple">
  This element takes the second grid position (1fr), meaning it takes up
  the rest of the remaining space.
</div> */
}

// <div className="parent">
//   <div className="ex2 box">1</div>
//   <div className="ex2 box">2</div>
//   <div className="ex2 box">3</div>
// </div>

// <section className="container">
//   <div className="name">Jason Prince</div>
//   <div className="title__job">full stack web developer</div>
//   <div className="title__web-portfolio">web portfolio</div>
//   <div className="title__pixabay-image-search">pixabay image search</div>
//   <div className="title__cooking-with-react">Cooking With React</div>
//   <div className="details__web-portfolio">
//     I needed a place to showcase my projects. I used a next js framework and
//     hosted from vercel. Styling in sass with a grid display and organized
//     with bem. Icons are svg and came from fontawesome.
//   </div>
//   <div className="used__web-portfolio">
//     next js | vercel | sass | css grid | bem | fontawesome
//   </div>
//   <div className="details__pixabay-image-search"></div>
//   <div className="details__cooking-with-react">Cooking With React</div>
// </section>
