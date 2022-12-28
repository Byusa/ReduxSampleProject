import React  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector( state => state.counter );
  const show = useSelector( state => state.showCounter ); 

  const incrementHandler = () => {
    dispatch({ type:  "increment" });
  };

  const IncreaseHandler = () => {
    dispatch({ type:  "increase" , amount: 10});
  };

  const decrementHandler = () => {
    dispatch({ type:  "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle", showCounter })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show?  
          <div className={classes.value}> {counter}</div> : <></>
          }
      <div>
        <button onClick={incrementHandler}> Increment </button>
        <button onClick={decrementHandler}> Decrement </button>
        <button onClick={IncreaseHandler}> Increase by 10 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import React, { Component } from "react"
// import { useDispatch, useSelector, connect } from "react-redux"
// import classes from './Counter.module.css';

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//    };
 
//   decrementHandler = () => {
//      this.props.decrement();
//    };
 
//   toggleCounterHandler = () => {};

//   render() {
//       return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}> {this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}> Increment </button>
//         <button onClick={this.decrementHandler.bind(this)}> Decrement </button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
//   }
// }
// const maspStateToProps = state => {
//   // same as useSelector in functional component
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   // same as useDispatch in functional component
//   return {
//     increment: () => dispatch({ type:  "increment" }),
//     decrement: () => dispatch({ type:  "decrement" })
//   }
// }
// export default connect(maspStateToProps, mapDispatchToProps)(Counter);


