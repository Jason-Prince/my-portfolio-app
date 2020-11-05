import Header from "../components/header";
import Contacts from "../components/contacts";
import Skills from "../components/skills";
import MyPicture from "../components/myPictures";
import MyProjects from "../components/myProjects";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>
      <div className="home__skills">
        <Skills />
      </div>
      <div className="home__mypictures">
        <MyPicture />
      </div>
      <div className="home__myprojects">
        <MyProjects />
      </div>
      <div className="home__contacts">
        <Contacts />
      </div>
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
