import React from "react";
import "./styles.css";

// export const HelloWorld = <h1> Hello Shubham from app.js </h1>;
// export const HelloWorld = React.createElement("h1", null, "Hello from H1");

// class HelloWorld extends React.Component {
//   render() {
//     // console.log(this.props);
//     const { name } = this.props;
//     return <h1> Hello from Class component, To {name} </h1>;
//   }
// }

// function HelloWorld(props) {
//   // console.log(props);
//   const { name } = props;
//   return <h1> Hello from Function Component, To {name} </h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <>
//         <h1> Welcome, {name}! </h1>
//         <button
//           onClick={function () {
//             console.log("button clicked");
//           }}
//         >
//           Click here
//         </button>
//       </>
//     );
//   }
// }

// export { Welcome };
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 10
    };
  }
  render() {
    let { counter } = this.state;
    return (
      <div className="App">
        <h2>{counter}</h2>
        <button
          onClick={() => {
            let newState = { counter: counter + 1 };
            this.setState(newState);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            let newState = { counter: counter - 1 };
            this.setState(newState);
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
