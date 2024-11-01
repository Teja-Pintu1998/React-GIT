import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount is called");
  }


  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>React series</h2>
        {/* <User name= {"Teja"}/> */}

        <UserClass name={"Teja class 1"} location={"Dehradun"} />
        {/* <UserClass name={"Teja class 2"} location={"Dehradun"} />
        <UserClass name={"Teja class 3"} location={"Dehradun"} />
        <UserClass name={"Teja class 4"} location={"Dehradun"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return(
//     <div>
//       <h1>About</h1>
//       <h2>React series</h2>
//       {/* <User name= {"Teja"}/> */}
//       <UserClass name= {"Teja class"} location= {"Dehradun"}/>
//     </div>
//   )
// }

export default About;
