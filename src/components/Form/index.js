import React, { Component } from "react";
import {
  validateAlpabetical,
  validateMaxLength,
  validateRequired
} from "../../helpers/Validation";
import View from "./View";

class Form extends Component {
  state = {
    name: "",
    nameValid: false,
    nameTouched: false,
    nameEr: "",
    text: "",
    textValid: false,
    textTouched: false,
    textEr: ""
  };

  //   fieldChange = ev => {
  //     //   this.setState( ev => {
  //     //     [ev.target.name]: ev.target.value
  //     //   })

  //     this.setState({
  //       [ev.target.name]: ev.target.value
  //     });
  //   };

  changeName = ev => {
    const name = ev.target.value;
    let nameValid = false;
    const nameEr =
      validateRequired(name) ||
      validateAlpabetical(name) ||
      validateMaxLength(10)(name);

    nameEr ? (nameValid = false) : (nameValid = true);

    this.setState({
      name,
      nameValid,
      nameTouched: true,
      nameEr
    });
  };

  changeText = ev => {
    const text = ev.target.value;
    let textValid = false;
    const textEr = validateRequired(text) || validateMaxLength(30)(text);

    textEr ? (textValid = false) : (textValid = true);

    this.setState({
      text,
      textValid,
      textTouched: true,
      textEr
    });
  };
  render() {
    const { changeName, changeText } = this;
    return (
      <View data={this.state} changeName={changeName} changeText={changeText} />
    );
  }
}

export default Form;
