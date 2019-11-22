import React from "react";
import Pub from "./units/publications.json";
import Reader from "./components/Reader/Reader";

const App = () => (
  <div>
    <Reader items={Pub} />
  </div>
);

export default App;
