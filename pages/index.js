import Header from "../components/header";
import OnlinePresence from "../components/onlinePresence";
import Skills from "../components/skills";
import MyPicture from "../components/myPictures";
import MyProjects from "../components/myProjects";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <OnlinePresence />
      <Skills />
      <MyPicture />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default Home;
