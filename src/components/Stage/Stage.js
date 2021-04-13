import React from 'react';
import Door from '../Door/Door';
import styles from './Stage.module.scss';

const Stage = () => {
  return (
    <section className={styles.Stage}>
      <header>
        <h1>The Monty Hall Problem</h1>
        <h2>Pick a Door</h2>
      </header>
      <Door />
      <Door />
      <Door />
    </section>
  );
};

export default Stage;
