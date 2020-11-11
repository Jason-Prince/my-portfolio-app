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
          <div className="content--left">live demo link</div>
          <div className="content--left">
            <span>Coolking with React</span>
            <span>All about cooking with react</span>
          </div>
          <div className="content--left">github code link</div>
        </div>
        {/* pixabay image search */}
        <div className="card">
          <div className="content--center">
            <img
              src="https://via.placeholder.com/400"
              alt="pixabay image search"
            />
          </div>
          <div className="content--left">live demo link</div>
          <div className="content--left">Pixabay Image Search</div>
          <div className="content--left">github code link</div>
        </div>
        {/* web portfolio */}
        <div className="card">
          <div className="content--center">
            <img src="https://via.placeholder.com/400" alt="web portfolio" />
          </div>
          <div className="content--left">live demo link</div>
          <div className="content--left">
            Portfolio Site I needed a place to showcase my projects. I used a
            next js framework and hosted from vercel. Styling in sass with a
            grid display and organized with bem. Icons are svg and came from
            fontawesome.
          </div>
          <div className="content--left">github code link</div>
        </div>
        {/* accomplishments */}
        <div className="section">Accomplishments</div>
        <div className="card">
          <div className="content--center">DOD Security Clearance: Secret</div>
          <div className="content--center">
            Lambda School: Full Stack Web Developer
          </div>
          <div className="content--center">University of Phoenix: BSIT</div>
        </div>
        {/* contact me */}
        <div className="section">Contact Me</div>
        <div className="card">
          <div className="content--center">linkedin</div>
          <div className="content--center">github</div>
          <div className="content--center">phone</div>
          <div className="content--center">email</div>
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
