import React, { useState } from 'react';

// ========== components ==========
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

// ========== styles ==========

import styles from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(feedback);
  const { good, neutral, bad } = feedback;

  const leaveFeedback = optionKey => {
    setFeedback(prevFeedback => {
      return { ...prevFeedback, [optionKey]: feedback[optionKey] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const values = Object.values({ ...feedback });
    const total = values.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return total;

    // return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(1);
  };

  return (
    <div className={styles.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
