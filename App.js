import React from "react";
import ReactDOM from "react-dom/client";

//JSX -> Babel transpiles it to React.createElement -> JS object -> HtmlElement
const heading = <h1 className="head">Namaste React using JSX 🚀</h1>;
console.log(heading);

const Title = ()=> {
    return <h1>React Title</h1>
}

// React Functional Component
const HeadingComponent = () => {
  return <div>
    {heading}
    {/* Child component */}
    <Title/>
    {/* Title can also be written like this */}
    {Title()}
  </div>
};

// If we want to create multiple elements with lot of sibilings
// this will make it complex So there JSX comes into picture.

// Creating a root and rendering react elements into it is a job of react-dom library
const root = ReactDOM.createRoot(document.getElementById("root"));
``;
// Takes the element object and based on the object, render method will convert to the html tag and put into the root
// root.render(heading);
root.render(<HeadingComponent/>);