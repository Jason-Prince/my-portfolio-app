import { text } from "@fortawesome/fontawesome-svg-core";

const home = () => {
  return (
    <div className="body__column">
      <div className="body__rows">
        <div className="banner">
          <img className="banner__arizona" src="/arizona.png" alt="splat" />
          <svg
            className="banner__blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#00E5EA"
              d="M42.5,-74.9C55.2,-66.2,65.9,-55.2,75.1,-42.4C84.3,-29.5,91.9,-14.8,92.2,0.1C92.4,15,85.2,30,76.4,43.5C67.6,57,57.1,68.9,44.1,77.3C31.1,85.8,15.5,90.8,-0.3,91.3C-16.1,91.8,-32.2,87.7,-46.1,79.8C-60,71.8,-71.7,60,-79.2,46C-86.7,32.1,-90,16,-89,0.6C-87.9,-14.8,-82.5,-29.7,-75,-43.6C-67.4,-57.5,-57.8,-70.4,-44.9,-79.1C-32.1,-87.7,-16,-92.1,-0.6,-91C14.8,-90,29.7,-83.6,42.5,-74.9Z"
              transform="translate(100 100)"
            />
          </svg>

          <img className="banner__plane" src="/plane.png" alt="spater" />
          <div className="banner__text">
            <i className="fas fa-chevron-left left"></i>
            <div className="web-developer">Web Devloper</div>
            <i class="fas fa-chevron-right right"></i>
          </div>
          <i class="fas fa-long-arrow-alt-down banner__scroll"></i>
        </div>
        <div className="about-me">about me</div>
        <div className="cooking">
          <svg
            className="cooking__blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#00E5EA"
              d="M41.9,-75C53.9,-65.6,63.1,-53.6,72,-40.7C80.8,-27.8,89.4,-13.9,91.1,1C92.9,15.9,87.7,31.8,78.7,44.4C69.6,57,56.6,66.3,42.8,74.6C29.1,83,14.5,90.4,-0.8,91.8C-16.1,93.2,-32.3,88.5,-43.7,78.8C-55.1,69.1,-61.9,54.4,-67.7,40.4C-73.5,26.4,-78.3,13.2,-78.3,0C-78.3,-13.2,-73.4,-26.4,-67.4,-40C-61.4,-53.6,-54.2,-67.5,-42.8,-77.3C-31.4,-87.1,-15.7,-92.7,-0.4,-92.1C14.9,-91.4,29.8,-84.5,41.9,-75Z"
              transform="translate(100 100)"
            />
          </svg>

          <img
            className="cooking__image"
            src="/Cooking-With-React.png"
            alt="placeholder"
          />
          <div className="cooking__title">Cooking With React</div>
          <div className="cooking__content">cooking content</div>
          <div className="cooking__demo">cooking demo</div>
          <div className="cooking__code">cooking code</div>
        </div>
        <div className="pixabay">pixabay</div>
        <div className="portfolio">portfolio</div>
        <div className="contact">contact</div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default home;

// <div className="section">
//   <div>Jason Prince</div>
//   <div>Full Stack Web Developer</div>
// </div>
// {/* projects */}
// <div className="section">Projects</div>
// {/* cooking with react */}
// <div className="card">
//   <div className="content--center">
//     <img
//       className="image-400px"
//       src="/Cooking-With-React.png"
//       alt="cooking with react"
//     />
//   </div>
//   <div className="content">
//     <a
//       className="link__container"
//       href="https://reciepes.netlify.app/"
//       target="_blank"
//     >
//       <i className="fas fa-link"></i>
//       <div>Live Demo</div>
//       <i className="fas fa-external-link-alt icon--small"></i>
//     </a>
//     <div className="content--left">
//       <span>Coolking with React</span>
//       <span>All about cooking with react</span>
//     </div>
//     <a
//       className="link__container"
//       href="https://github.com/Jason-Prince/Cooking-With-React"
//       target="_blank"
//     >
//       <i className="fab fa-github"></i>
//       <div>Github Repository</div>
//       <i className="fas fa-external-link-alt icon--small"></i>
//     </a>
//   </div>
// </div>
// {/* pixabay image search */}
// <div className="card">
//   <div className="content--center">
//     <img
//       src="https://via.placeholder.com/400"
//       alt="pixabay image search"
//     />
//   </div>
//   <div className="content">
//     <a
//       className="link__container"
//       href="https://image-search-pixabay.netlify.app/"
//       target="_blank"
//     >
//       <i className="fas fa-link"></i>
//       <div>Live Demo</div>
//       <i className="fas fa-external-link-alt icon--small"></i>
//     </a>
//     <div className="content--left">Pixabay Image Search</div>
//     <a
//       className="link__container"
//       href="https://github.com/Jason-Prince/image-gallery"
//       target="_blank"
//     >
//       <i className="fab fa-github"></i>
//       <div>Github Repository</div>
//       <i className="fas fa-external-link-alt icon--small"></i>
//     </a>
//   </div>
// </div>
// {/* web portfolio */}
// <div className="card">
//   <div className="content--center">
//     <img src="https://via.placeholder.com/400" alt="web portfolio" />
//   </div>
//   <div className="content">
//     <a className="link__container" href="#" target="_blank">
//       <i className="fas fa-link"></i>
//       <div>Live Demo</div>
//       <i className="fas fa-external-link-alt icon--small"></i>
//     </a>
//     <div className="content--left">
//       Portfolio Site I needed a place to showcase my projects. I used a
//       next js framework and hosted from vercel. Styling in sass with a
//       grid display and organized with bem. Icons are svg and came from
//       fontawesome.
//     </div>
//     <a className="link__container" href="#" target="_blank">
//       <i className="fab fa-github"></i>
//       <div>Github Repository</div>
//       <i className="fas fa-external-link-alt icon--small"></i>
//     </a>
//   </div>
// </div>
// {/* accomplishments */}
// <div className="section">Accomplishments</div>
// <div className="card">
//   <div className="content">
//     <div className="content--left">DOD Security Clearance</div>
//     <div className="content--left content--padding-left">Secret</div>
//     <div className="content--left">Lambda School</div>
//     <div className="content--left content--padding-left">
//       Full Stack Web Developer
//     </div>
//     <div className="content--left">University of Phoenix</div>
//     <div className="content--left content--padding-left">
//       Bachelor of Science in Information Technology
//     </div>
//   </div>
// </div>
// {/* contact me */}
// <div className="contact-me">
//   <div className="contact-me__title">Contact Me</div>
//   <a
//     className="github__profile"
//     href="https://github.com/jason-prince"
//     target="_blank"
//   >
//     <img className="github__icon" src="/github.png" alt="github logo" />
//     <div className="github__text">Github Profile</div>
//     <i className="fas fa-external-link-alt external-link__icon"></i>
//   </a>
//   <a
//     className="linkedin__profile"
//     href="https://www.linkedin.com/in/jason-c-prince/"
//     target="_blank"
//   >
//     <img
//       className="linkedin__icon"
//       src="/linkedIn.png"
//       alt="linkedin logo"
//     />
//     <div className="linkedin__text">Linkedin Profile</div>
//     <i className="fas fa-external-link-alt external-link__icon"></i>
//   </a>
//   <div className="phone">
//     <img
//       className="phone__icon"
//       src="/google_voice_96dp.png"
//       alt="phone"
//     />
//     <div className="phone__number">(415) 498-0783</div>
//   </div>
//   <div className="email">
//     <img className="email__icon" src="/gmail.png" alt="gmail logo" />
//     <div className="email__address">jason.c.prince@gmail.com</div>
//   </div>
// </div>
// {/* footer */}
// <div className="footer">
//   <img className="footer__icon" src="/copyright.png" alt="copyright" />
//   <div className="footer__text">Jason Prince. All rights reserved.</div>
// </div>
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
