import React from "react";
import { Home } from "./pages";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
