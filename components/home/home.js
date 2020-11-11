import Header from "./header";
import Skills from "./skills";
import Web_Portfolio from "./web_portfolio";
import Pixabay_Image_Search from "./pixabay_image_search";
import Cooking_With_React from "./cooking_with_react";
import Accomplishments from "./accomplishments";
import Contact_Me from "./contact_me";
import Footer from "./footer";

const home = () => {
  return (
    <section className="home">
      <Header />
      <Skills />
      <Web_Portfolio />
      <Pixabay_Image_Search />
      <Cooking_With_React />
      <Accomplishments />
      <Contact_Me />
      <Footer />
    </section>
  );
};

export default home;
