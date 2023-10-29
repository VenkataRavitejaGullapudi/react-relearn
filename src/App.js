import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Creating a root and rendering react elements into it is a job of react-dom library
const root = ReactDOM.createRoot(document.getElementById("root"));
``;
// Takes the element object and based on the object, render method will convert to the html tag and put into the root
// root.render(heading);
root.render(<AppLayout />);
