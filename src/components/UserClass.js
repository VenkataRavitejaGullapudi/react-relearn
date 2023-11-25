import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        blog: "Loading...",
        avatar_url: "avatar_url"
      },
    };

    console.log("User Constructor (Child)", this.props.name);
  }

  async componentDidMount() {
    console.log("User ComponentDidMount (Child)", this.props.name);

    const data = await fetch(
      "https://api.github.com/users/venkataravitejagullapudi"
    );
    const response = await data.json();
    console.log(response);
    this.setState({
        userInfo: response
    })
  }

  componentDidUpdate() {
    console.log("User ComponentDidUpdate (Child)");
  }

  componentWillUnmount() {
    console.log("User ComponentWillUnmount (Child)");
  }

  render() {
    const { name, location, blog, avatar_url } = this.state.userInfo;
    console.log("User render (Child)", this.props.name);
    return (
      <div className="user-card">
        <img src={avatar_url} alt="user" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Blog: {blog}</h4>
      </div>
    );
  }
}

export default UserClass;
