import logo from './logo.svg';
import React from "react";
import './App.scss';
import {Login, Register} from "./components/login/index";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      isLoggingActive: true,
    };
  }

  componentDidMount() {
    this.SideThing.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.SideThing.classList.remove("right");
      this.SideThing.classList.add("left");
    } else {
      this.SideThing.classList.remove("left");
      this.SideThing.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <SideThing
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.SideThing = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const SideThing = props => {
  return (
    <div
      className="side-thing"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
