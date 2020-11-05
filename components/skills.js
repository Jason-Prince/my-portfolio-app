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
      <div className="row row--a col col--a">Skills</div>
      <div className="row row--b col col--a">
        <Html />
      </div>
      <div className="row row--b col col--b">
        <Css />
      </div>
      <div className="row row--b col col--c">
        <Sass />
      </div>
      <div className="row row--b col col--d">
        <Javascript />
      </div>
      <div className="row row--b col col--e">
        <ReactJS />
      </div>
      <div className="row row--b col col--f">
        <NextJS />
      </div>
      <div className="row row--b col col--g">
        <NodeJS />
      </div>
      <div className="row row--b col col--h">
        <Python />
      </div>
      <div className="row row--b col col--i">
        <Django />
      </div>
      <div className="row row--b col col--j">
        <PostgreSQL />
      </div>
      <div className="row row--b col col--k">
        <MongoDB />
      </div>
    </section>
  );
};

export default skills;
