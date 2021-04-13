import React from 'react';
import styles from './Door.module.scss';

const Door = () => {
  return (
    <div className={styles.DoorFrame}>
      <div className={styles.Door}>
        <div className="number">1</div>
      </div>
    </div>
  );
};

export default Door;
