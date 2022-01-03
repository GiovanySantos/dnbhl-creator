import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PuzzleCreator from "../pages/PuzzleCreator";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='*' element={<Home />} />
        <Route exact path='/puzzlecreator' element={<PuzzleCreator />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
