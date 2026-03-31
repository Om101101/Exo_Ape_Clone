import React from "react";
import Navbar from "./Componets/Navbar";
import Landing from './Componets/Landing';
import Work from './Componets/Work';

function App() {
  return (
    <div className=" w-full ">
      <Navbar />
      <Landing />
      <Work />
    </div>
  );
}

export default App;
