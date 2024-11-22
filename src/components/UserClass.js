import { Component } from "react";
import UserContext from "../utills/UserContext";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child class constructor");
  }

  
  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log("Child class render");

    return (
      <div className="user-card">
        <div style={{ display: "flex", gap: 10 }}>
          <button
            disabled={count === 0}
            onClick={() =>
              this.setState({
                count: count - 1,
              })
            }
          >
            -
          </button>
          <h2>Count: {count}</h2>
          <button
            onClick={() =>
              this.setState({
                count: count + 1,
              })
            }
          >
            +
          </button>
        </div>
        <UserContext.Consumer>
          {({ username }) => <h1>LoggedIn user: {username} </h1>}
        </UserContext.Consumer>

        <h2>Name: {name}</h2>
        <h3>Location: Chennai</h3>
        <h4>Contact: thilip2017@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
