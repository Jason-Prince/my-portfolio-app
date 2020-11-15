const home = () => {
  return (
    <div className="body">
      <img
        className="body body__car body__car--center-fixed"
        src="/car.png"
        alt="car"
      />
      <svg
        className="body body__row-1 body__row-1__arizona"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 1000"
        enable-background="new 0 0 1000 1000"
        xml="preserve"
      >
        <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
          <path
            fill="#233D4D"
            d="M3125,4984.4c0-12.8-44.7-298.3-98-630.6c-93.7-588-100.1-611.4-172.6-722.2c-72.4-108.6-81-112.9-168.3-112.9c-89.5,0-95.9,4.3-127.8,85.2c-38.3,95.9-83.1,127.8-174.7,127.8c-34.1,0-78.8,19.2-100.1,42.6c-51.1,55.4-91.6,53.3-206.7-10.7l-95.9-53.3l-12.8-336.6c-6.4-183.2-23.4-524.1-36.2-756.3c-21.3-387.7-27.7-430.4-74.6-500.7c-27.7-44.7-59.6-130-72.4-191.7c-23.4-110.8-23.4-112.9,81-298.3c78.8-142.7,110.8-232.2,142.7-385.6c34.1-170.4,49-210.9,106.5-266.3c55.4-55.4,66-78.8,57.5-140.6c-12.8-87.4-53.3-125.7-240.7-221.6c-76.7-40.5-164-100.1-196-134.2c-83.1-87.3-157.7-289.7-185.3-496.4c-23.4-172.6-27.7-183.2-121.4-279.1c-53.3-55.4-127.8-108.7-164-119.3l-68.2-19.2l-23.4-274.8c-14.9-151.3-21.3-287.6-14.9-302.5c6.4-14.9,68.2-32,138.5-40.5l127.8-14.9l-12.8-91.6c-6.4-51.1-38.4-132.1-68.2-179c-55.4-83.1-74.6-93.8-266.3-136.4c-29.8-6.4-95.9-44.7-149.1-85.2C834.8-1637,790-1726.4,822-1781.8c8.5-17,319.6-200.3,688.1-409c368.6-208.8,864.9-500.7,1105.7-649.8c238.6-151.2,664.7-406.9,945.9-570.9c281.2-164.1,784-460.2,1116.4-658.3l602.9-360l419.7-85.2c302.5-61.8,658.3-110.8,1288.9-179c479.3-53.3,892.6-95.9,916.1-95.9c98,0,223.7,813.8,779.7,5027.8c140.6,1071.6,313.2,2352,381.4,2844.1c68.2,492.1,123.6,896.9,121.4,899.1c-2.1,0-394.1,61.8-875.6,134.2c-1188.8,176.8-2767.4,447.4-4056.3,690.3C3664,4918.4,3167.6,5010,3152.7,5010C3137.8,5010,3125,4999.4,3125,4984.4z"
          />
        </g>
      </svg>
      <svg
        className="body body__row-1 body__row-1__blob body__row-1__blob--rotate"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F2545B"
          d="M57.3,-67.9C72.4,-55.7,81.5,-35.8,85.2,-15C88.9,5.8,87.2,27.6,77.3,44.5C67.4,61.4,49.2,73.3,29.5,79.9C9.9,86.6,-11.3,87.9,-29.4,81.2C-47.5,74.4,-62.6,59.6,-71.6,42.2C-80.7,24.8,-83.7,4.7,-80.5,-14.3C-77.3,-33.4,-67.9,-51.6,-53.4,-63.9C-39,-76.2,-19.5,-82.8,0.8,-83.7C21.1,-84.7,42.2,-80.1,57.3,-67.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <i className="fas fa-chevron-left body body__row-1 body__row-1__left-chevron body__row-1__left-chevron--move-left"></i>
      <div className="body body__row-1 body__row-1__text body__row-1__text--fade-in">
        Web Devloper
      </div>
      <i class="fas fa-chevron-right body body__row-1 body__row-1__right-chevron body__row-1__right-chevron--move-right"></i>
      <i class="fas fa-long-arrow-alt-down body body__row-1 body__row-1__arrow body__row-1__arrow--bounce"></i>

      <div className="about-me__title">Hello, I'm Jason</div>
      <div className="about-me__content">
        I'm a web developer who left Arizona for Utah in 2017. I'm a recent
        graduate from{" "}
        <a href="#" className="link">
          Lamba School
        </a>{" "}
        in their Full Stack Web Devloper track.
      </div>
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
      <div className="pixabay">pixabay</div>
      <div className="portfolio">portfolio</div>
      <div className="contact">contact</div>
      <div className="footer">footer</div>
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
