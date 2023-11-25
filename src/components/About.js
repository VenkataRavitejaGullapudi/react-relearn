import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserCopyClass from "./UserCopy";

class About extends React.Component {
  constructor(props) {
    super(props)

    console.log("About Constructor (Parent)")
  }
  componentDidMount() {
    console.log("About ComponentDidMount (Parent)");
  }
  render() {
    console.log("About Render (Parent)")
    return (
      <div>
        <h1>About</h1>
        <h2>Sample about section</h2>
        <UserClass name={"Raviteja"} />
      </div>
    );
  }
}

export default About;
