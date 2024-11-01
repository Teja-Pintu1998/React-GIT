
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    
      userInfo:{
        name:"Dummy name",
        location:"Dummy location",
        node_id: 456789090,
        created_at:12344589555556
      }
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name);  
    const data = await fetch("https://api.github.com/users/Teja-Pintu1998");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo : json,
    })
  }

  componentDidUpdate(){
    console.log("Component didmount called")
  }

  render() {
    console.log("Child Render");
    // const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          CountIncrease
        </button>
        <h2>name: {this.state.userInfo.login}</h2>
        <h2>node_id: {this.state.userInfo.node_id}</h2>
        <h2>Created: {this.state.userInfo.created_at}</h2>
        <h2>Contact: @teja.com</h2>
      </div>
    );
  }
}

export default UserClass;


        //  Moounting lifecycle starts
// Constructor is called(here we receive props and create the state variables)
// render is called 
//               above two comes under render phase

//                Now comes the commit phase
// (here Dom gets updated with the dummy data)
// componentDidMount gets called

      // Updating life cycle startts

// we fetch the APIs inside this componentDidMount and if there is any setState or React triggers the re-coincillation process , react notices the change inthe value of any state variable - now it again triggers the render method and this time it update the DOM with latest or updated data

// Now, componentDidUpdate is called
  
