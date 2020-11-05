import Header from "../components/header";
import Contacts from "../components/contacts";
import Skills from "../components/skills";
import MyProjects from "../components/myProjects";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="home">
      <div className="row row--a col col--a">
        <Header />
      </div>
      <div className="row row--b col col--a">
        <Skills />
      </div>
      <div className="row row--c col col--a">
        <MyProjects />
      </div>
      <div className="row row--d col col--a">
        <MyProjects />
      </div>
      <div className="row row--e col col--a">
        <MyProjects />
      </div>
      <div className="row row--f col col--a">
        <Contacts />
      </div>
      <div className="row row--g col col--a">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
