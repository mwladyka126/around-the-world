import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue, name }) => (
  <div className={styles.component}>
    <input
      type="text"
      className={styles.input}
      value={currentValue}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
      name={name}
      placeholder={'write here'}
    />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
};
export default OrderOptionText;
