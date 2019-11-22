/* eslint-disable react/prop-types */
import React, { Component } from "react";
// import PropTypes from "prop-types";
import Controls from "./Controls/Controls";
import Publications from "./Publication/Publication";
import Counter from "./Counter/Counter";
import s from "../styles.css";

export default class Reader extends Component {
  state = {
    index: 0,
    step: 1
  };

  incrementBut = () => {
    const { step } = this.state;

    this.setState(prevState => ({
      index: prevState.index + step
    }));
  };

  decrementBut = () => {
    const { step } = this.state;

    this.setState(prevState => {
      return {
        index: prevState.index - step
      };
    });
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;

    return (
      <div className={s.reader}>
        <Publications publications={items[index]} />
        <Controls
          decrementBut={this.decrementBut}
          incrementBut={this.incrementBut}
          index={index}
          length={items.length}
        />
        <Counter countNumbs={index + 1} />
      </div>
    );
  }
}
