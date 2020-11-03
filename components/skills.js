import Css from "../components/svg/css";
import Html from "../components/svg/html";
import Django from "../components/svg/django";
import Github from "../components/svg/github";
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
      <div className="skill__html">
        <Html />
      </div>
      <div className="skill__css">
        <Css />
      </div>
      <div className="skill__sass">
        <Sass />
      </div>
      <div className="skill__javascript">
        <Javascript />
      </div>
      <div className="skill__reactjs">
        <ReactJS />
      </div>
      <div className="skill__nextjs">
        <NextJS />
      </div>
      <div className="skill__nodejs">
        <NodeJS />
      </div>
      <div className="skill__python">
        <Python />
      </div>
      <div className="skill__django">
        <Django />
      </div>
      <div className="skill__github">
        <Github />
      </div>
      <div className="skill__postgresql">
        <PostgreSQL />
      </div>
      <div className="skill__mongodb">
        <MongoDB />
      </div>
    </section>
  );
};

export default skills;
