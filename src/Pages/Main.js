/*eslint-disable*/
import { react, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../Components/Header";
import FormationsPage from "../Components/Formations";
import ExperiencesPages from "../Components/Experiences";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ResponsiveAppBar() {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setWindowSize(e.currentTarget.innerWidth);
  };
  const sections = [
    { id: 0, name: "Formations" },
    { id: 1, name: "Expériences" },
    { id: 2, name: "Compétences" },
    { id: 3, name: "A propos de moi" },
    { id: 4, name: "Livre blanc" },
  ];

  const components = [<FormationsPage />, <ExperiencesPages />];

  return (
    <>
      <Header setSelectedMenu={(id) => setSelected(id)} sections={sections} />
      {components[selected]}
      {isVisible && (
        <button
          style={{
            position: "fixed",
            bottom:"5%",
            right:"5%",
            cursor: "pointer",
            padding: "10px 12px",
            backgroundColor: "#18fad9",
            color: "black",
            fontWeight: "550",
            border: "3px solid black",
            width: "fit-content",
            transitionDuration: "200ms",
          }}
          id="fade-button"
          aria-haspopup="true"
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon />
        </button>
      )}
    </>
  );
}

ResponsiveAppBar.propTypes = {
  buttons: PropTypes.object,
  disableModal: PropTypes.func,
};

export default ResponsiveAppBar;
