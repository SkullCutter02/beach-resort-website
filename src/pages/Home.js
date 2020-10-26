import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <React.Fragment>
      <Hero className={"hero"}>
        <Banner
          title={"Luxurious rooms"}
          subtitle={"deluxe rooms starting at $299"}
        >
          <Link to={"/rooms"} className={"btn-primary"}>
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
