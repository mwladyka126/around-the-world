import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  description: '.description',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should render element description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.description)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };
const checkDescriptionOnDay = (day, expectedDescription) => {
  it(`should show correct at ${day}`, () => {
    global.Date = mockDate(`${day}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDescription = component.find(select.description).text();
    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};
describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionOnDay('2021-06-21', '');
  checkDescriptionOnDay('2021-07-30', '');
  checkDescriptionOnDay('2021-09-23', '');
});
describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionOnDay('2021-06-20', '1 day to Summer!');
  checkDescriptionOnDay('2021-09-24', '270 days to Summer!');
  checkDescriptionOnDay('2021-06-01', '20 days to Summer!');
});
