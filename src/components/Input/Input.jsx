import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

export default class Input extends Component {
  static defaultProps = {
    title:
      'Must contain minimium a one character of letter, number, space, underscore, dash, plus',
    pattern: '[a-zA-Z0-9 _-]+',
    type: 'text',
    placeholder: '',
    handler: null,
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    handler: PropTypes.func,
  };

  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });

    if (this.props.handler) {
      this.props.handler(event);
    }
  };

  isValid() {
    const regExp = new RegExp(this.props.pattern);

    if (regExp.test(this.state.value)) {
      return true;
    }

    return false;
  }

  render() {
    const { name, type, pattern, title, placeholder } = this.props;
    const { valid, invalid, input, error } = styles;

    let isValid = true;
    let className = '';

    if (this.state.value) {
      isValid = this.isValid();
      className = isValid ? valid : invalid;
    } else {
      className = input;
    }

    return (
      <Fragment>
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
        {isValid || <div className={error}>{title}</div>}
      </Fragment>
    );
  }
}
