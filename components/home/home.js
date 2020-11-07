import Header from "./header";
import Skills from "./skills";
import Web_Portfolio from "./web_portfolio";
import Pixabay_Image_Search from "./pixabay_image_search";
import Cooking_With_React from "./pixabay_image_search";
import Accomplishments from "./accomplishments";
import Contact_Me from "./contact_me";
import Footer from "./footer";
import Web_portfolio__content from "./web_portfolio__content";

const home = () => {
  return (
    <section className="home">
      <section className="home__header">
        <Header />
      </section>
      <section className="home__skills">
        <Skills />
      </section>
      <section className="home__web_portfolio">
        <Web_Portfolio />
      </section>
      <section className="home__pixabay_image_search">
        <Pixabay_Image_Search />
      </section>
      <section className="home__cooking_with_react">
        <Cooking_With_React />
      </section>
      <section className="home__accomplishments">
        <Accomplishments />
      </section>
      <section className="home__contact_me">
        <Contact_Me />
      </section>
      <section className="home__footer">
        <Footer />
      </section>
    </section>
  );
};

export default home;
