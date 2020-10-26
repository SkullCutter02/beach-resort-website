import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "sagittis eu volutpat odio facilisis mauris sit amet massa vitae",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "sagittis eu volutpat odio facilisis mauris sit amet massa vitae",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "sagittis eu volutpat odio facilisis mauris sit amet massa vitae",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "sagittis eu volutpat odio facilisis mauris sit amet massa vitae",
      },
    ],
  };

  render() {
    return (
      <section className={"services"}>
        <Title title={"services"} />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className={"service"}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
