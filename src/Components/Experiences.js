import React, { useEffect, useState } from "react";
import { useTrail, animated } from "react-spring";
import experiences from "../Sources/Formation.json";
import Style from "./Experience.module.css";

export default function ExperiencesPages() {
  const [display, setDisplay] = useState({
    count: null,
    limit: experiences.length,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (display.count !== null) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [display.count]);

  const trail = useTrail(display.count, {
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(50px)",
    delay: 200,
    from: { opacity: 0, transform: "translateY(50px)" },
    overflow: "hidden",
  });

  return (
    <div>
      <button
        onClick={() =>
          display.count < display.limit
            ? setDisplay({ ...display, count: display.count + 1 })
            : setDisplay({ ...display, count: null })
        }
      >
        Afficher les expériences
      </button>
      <div className={Style.container}>
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            <div
              className={`${Style.experienceCard} ${
                index % 2 === 0 ? Style.evenCard : Style.oddCard
              }`}
            >
              {experiences[index] && (
                <>
                  <h3>{experiences[index].title}</h3>
                  <p>{experiences[index].description}</p>
                </>
              )}
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
