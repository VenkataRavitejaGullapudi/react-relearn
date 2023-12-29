import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserCopyClass from "./UserCopy";
import UserContext from "../utils/UserContext";

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
        <div>LoggedIn User:
          <UserContext.Consumer>
            {({loggedInUser})=> {
              return <h1>{loggedInUser}</h1>
            }}
          </UserContext.Consumer>
        </div>
        <h2 className="font-bold">Sample about section</h2>
        <UserClass name={"Raviteja"} />
      </div>
    );
  }
}

export default About;
