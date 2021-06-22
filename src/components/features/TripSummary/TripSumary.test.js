import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate proper link using id', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(
      <TripSummary
        id={expectedId}
        image="image.jpg"
        name="name"
        cost="dolar"
        days={1}
      />
    );
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });
  it('should render correct image and name', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'name';
    const component = shallow(
      <TripSummary
        id="id"
        image={expectedImage}
        name={expectedName}
        cost="dolar"
        days={1}
      />
    );
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });
  it('should render correct cost and days', () => {
    const expectedCost = 'dolar';
    const expectedDays = 1;
    const component = shallow(
      <TripSummary
        id="id"
        image="image.jpg"
        name="name"
        cost={expectedCost}
        days={expectedDays}
      />
    );
    expect(component.find('.details span').last().text()).toEqual(
      `from ${expectedCost}`
    );
    expect(component.find('.details span').first().text()).toBe(
      `${expectedDays} days`
    );
  });

  it('should throw error without required props (id, image, name, cost, days', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render spans with tags', () => {
    const expectedTags = ['beach', 'pool', 'all'];
    const component = shallow(
      <TripSummary
        id="id"
        image="image.jpg"
        name="name"
        cost="dolar"
        tags={expectedTags}
        days={1}
      />
    );
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render span if tags is falsy', () => {
    const component = shallow(
      <TripSummary
        id="id"
        image="image.jpg"
        name="name"
        cost="dolar"
        days={1}
      />
    );
    expect(component.hasClass('tags')).toBe(false);
  });
});
