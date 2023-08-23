import { Component } from "react";

import "./Input.scss";

type InputProps = {
  name: string;
  title?: string;
  pattern?: string;
  type?: string;
  placeholder?: string;
  handler?: (event?: any) => any;
};

export default class Input extends Component<InputProps> {
  static defaultProps = {
    title:
      "Must contain minimium a one character of letter, number, space, underscore, dash, plus",
    pattern: "^[a-zA-Z0-9\\- _]+$",
    type: "text",
    placeholder: "",
    handler: null,
  };

  state = {
    value: "",
  };

  handleChange: (event: any) => any = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.handler) {
      this.props.handler(event);
    }
  };

  isValid() {
    const regExp = new RegExp(this.props.pattern as string);

    if (regExp.test(this.state.value)) {
      return true;
    }

    return false;
  }

  render() {
    const { name, type, pattern, title, placeholder } = this.props;

    let isValid = true;
    let className = "";

    if (this.state.value) {
      isValid = this.isValid();
      className = isValid ? "valid" : "invalid";
    } else {
      className = "input";
    }

    return (
      <div className="wrapper">
        <input
          className={className}
          id={name}
          name={name}
          type={type}
          pattern={pattern}
          title={title}
          onChange={this.handleChange}
          placeholder={placeholder || name}
          autoComplete="on"
          required
        />
        {isValid || <div className="error">{title}</div>}
      </div>
    );
  }
}
