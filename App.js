// Creating a element is a core thing of react, so it comes from the react library.
const heading = React.createElement("h1", { id: "heading" }, "Hello world from React")

// Here React.createElement return(heading) is an object specifying the element
// Props - Attributes + children

// For creating nested elements like <div><h1></h1></div>
let parent = React.createElement("div", { id: "parent" }, heading)

// Siblings and child

parent = React.createElement("div", { id: "parent" }, [heading, heading])

// If we want to create multiple elements with lot of sibilings
// this will make it complex. So there JSX comes into picture.

// Creating a root and rendering react elements into it is a job of react-dom library
const root = ReactDOM.createRoot(document.getElementById("root"));

// Takes the element object and based on the object, render method will convert to the html tag and put into the root
// root.render(heading);
root.render(parent);