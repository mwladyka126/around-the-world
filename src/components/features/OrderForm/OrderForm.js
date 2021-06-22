import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import { Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripId, tripName, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode: tripCountry.alpha3Code,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  if (options.name && options.contact) {
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Please write you name & contact');
  }
};

const OrderForm = ({
  tripCost,
  options,
  setOrderOption,
  tripId,
  tripName,
  tripCountry,
}) => (
  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        {' '}
        <OrderOption
          setOrderOption={setOrderOption}
          currentValue={options[option.id]}
          title={option.id}
          {...option}
        />
      </Col>
    ))}

    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
    <Button
      onClick={() =>
        sendOrder(options, tripCost, tripId, tripName, tripCountry)
      }
    >
      Order now!
    </Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  tripCountry: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
