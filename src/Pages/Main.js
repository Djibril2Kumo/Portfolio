/*eslint-disable*/
import { react, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../Components/Header";
import FormationsPage from "../Components/Formations";
import ExperiencesPages from "../Components/Experiences";

function ResponsiveAppBar() {
  const [selected, setSelected] = useState(0);
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
    </>
  );
}

ResponsiveAppBar.propTypes = {
  buttons: PropTypes.object,
  disableModal: PropTypes.func,
};

export default ResponsiveAppBar;
