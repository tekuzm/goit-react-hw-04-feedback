import PropTypes from 'prop-types';
import capitalize from 'components/capitalize';

// ========== styles ==========

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedbackOptions}>
    {options.map(option => (
      <button
        className={styles.button}
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {capitalize(option)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
