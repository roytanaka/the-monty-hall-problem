import React from 'react';
import styles from './Btn.module.scss';

const Btn = props => {
  return <button className={styles.Btn}>{props.children}</button>;
};

Btn.defaultProps = {
  color: 'primary',
};

export default Btn;
