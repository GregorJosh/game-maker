import PropTypes from 'prop-types';

import styles from './Button.module.css';

export default function Button(props) {
  const {
    children: label,
    type = 'button',
    handler = null,
    value = '',
  } = props;

  return (
    <button
      className={styles.button}
      type={type}
      onClick={handler}
      value={value}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  handler: PropTypes.func,
  value: PropTypes.string,
};
