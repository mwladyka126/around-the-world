import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({ currentValue, setOptionValue, name }) => (
  <div className={styles.component}>
    <DatePicker
      type="date"
      className={styles.input}
      selected={currentValue}
      onChange={(date) => setOptionValue(date)}
      name={name}
      placeholderText={'pick a day'}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
  startDate: PropTypes.string,
  setStartDate: PropTypes.string,
};
export default OrderOptionDate;
