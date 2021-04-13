import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

const Radio = props => {
  const unchecked = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path d="M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"></path>
    </svg>
  );
  const checked = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path d="M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z"></path>
    </svg>
  );
  return (
    <label className={styles.Radio}>
      <span className={styles.Radio__input}>
        <input
          type="radio"
          name={props.name}
          value={props.value}
          id={props.id}
          checked={props.isSelected}
          onChange={props.changed}
        />
        <span aria-hidden="true" className={styles.Radio__control}>
          {props.isSelected ? checked : unchecked}
        </span>
      </span>
      <span
        className={[
          styles.Radio__label,
          props.isSelected && styles.selected,
        ].join(' ')}
      >
        {props.children}
      </span>
    </label>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Radio;
