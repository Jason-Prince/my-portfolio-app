import Css from "../components/svg/css";
import Html from "../components/svg/html";
import Django from "../components/svg/django";
import Javascript from "../components/svg/javascript";
import MongoDB from "../components/svg/mongodb";
import NextJS from "../components/svg/nextjs";
import NodeJS from "../components/svg/nodejs";
import PostgreSQL from "../components/svg/postgresql";
import Python from "../components/svg/python";
import ReactJS from "../components/svg/reatjs";
import Sass from "../components/svg/sass";

const skills = () => {
  return (
    <section className="skills">
      <div className="skill row--0 item--title">skills</div>
      <div className="skill row--1 item--html">
        <Html />
      </div>
      <div className="skill row--1 item--css">
        <Css />
      </div>
      <div className="skill row--1 item--sass">
        <Sass />
      </div>
      <div className="skill row--2 item--javascript">
        <Javascript />
      </div>
      <div className="skill row--2 item--reactjs">
        <ReactJS />
      </div>
      <div className="skill row--2 item--nextjs">
        <NextJS />
      </div>
      <div className="skill row--3 item--nodejs">
        <NodeJS />
      </div>
      <div className="skill row--3 item--python">
        <Python />
      </div>
      <div className="skill row--3 item--django">
        <Django />
      </div>
      <div className="skill row--4 item--postgresql">
        <PostgreSQL />
      </div>
      <div className="skill row--4 item--mongodb">
        <MongoDB />
      </div>
    </section>
  );
};

export default skills;
