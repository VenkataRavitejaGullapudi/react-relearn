import React from "react";

class UserCopyClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
    };

    console.log("UserCopy Constructor (Child)", this.props.name);
  }

  componentDidMount() {
    console.log("UserCopy ComponentDidMount (Child)", this.props.name);
  }

  render() {
    console.log("UserCopy render (Child)", this.props.name);
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase count
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Hyderabad</h3>
        <h4>Contact: ravi@gmail.com</h4>
      </div>
    );
  }
}

export default UserCopyClass;
