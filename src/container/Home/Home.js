import React, { useState } from 'react';
import Radio from '../../components/Radio/Radio';
import Btn from '../../components/Btn/Btn';
import styles from './Home.module.scss';

const Home = () => {
  const [prediction, setPrediction] = useState(null);

  const radioChangeHandler = e => {
    setPrediction(e.target.value);
  };
  return (
    <div className="home">
      <section className="into">
        <h1>The Monty Hall Problem</h1>
        <p>
          In the classic game show, Let’s Make a Deal, Monty Hall asks you to
          choose from one of three doors. One of the doors conceals the Grand
          Prize. Behind the other two doors are goats. You make your choice, but
          there’s a twist; the Monty will reveal a door with a goat and give you
          a chance to keep your original choice or switch to the other unopened
          door. Statistically, what is the best choice? Use this simulator to
          find out! Learn more about the Monty Hall Problem here.
        </p>
        <p>
          TL;DR: Pick the door with the prize. You are shown one of the
          incorrect doors. Is it better to keep your original choice or switch
          to the other door?
        </p>
      </section>
      <section>
        <h2>What’s your prediction?</h2>
        <div className={styles.prediction}>
          <Radio
            name="prediction"
            value="switch"
            id="switch"
            isSelected={prediction === 'switch'}
            changed={radioChangeHandler}
          >
            Better to switch
          </Radio>
          <Radio
            name="prediction"
            value="hold"
            id="hold"
            isSelected={prediction === 'hold'}
            changed={radioChangeHandler}
          >
            Better to hold
          </Radio>
          <Radio
            name="prediction"
            value="none"
            id="none"
            isSelected={prediction === 'none'}
            changed={radioChangeHandler}
          >
            Doesn’t matter
          </Radio>
        </div>
      </section>
      <section style={{ marginTop: '2em' }} className="text-center">
        <Btn>Let’s make a deal</Btn>
      </section>
    </div>
  );
};

export default Home;
