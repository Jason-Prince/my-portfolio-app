import HTML5 from "../svg/html5.svg";
import Sass from "../svg/sass.svg";
import JS from "../svg/javascript.svg";
import Python from "../svg/python.svg";
import CSS3 from "../svg/css3.svg";

const skills = () => {
  return (
    <section>
      <div className="icon--margin icon__html--size">
        <HTML5 />
      </div>
      <div className="icon--margin icon__css--size">
        <CSS3 />
      </div>
      <div className="icon--margin icon__sass--size">
        <Sass />
      </div>
      <div className="icon--margin icon__js--size">
        <JS />
      </div>
      <div className="icon--margin icon__python--size">
        <Python />
      </div>
    </section>
  );
};

export default skills;
