import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component {
  constructor() {
    super();
    console.log("Parent class constructor");
  }
  render() {
    console.log("Parent class render");

    return (
      <div>
        <h1>About us!</h1>
        <UserClass name={"Thiliban from class"} />
      </div>
    );
  }
}

export default AboutClass;
