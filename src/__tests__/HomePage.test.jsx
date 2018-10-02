import HomePage from '../home/HomePage';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders the home page correctly', () => {
    const tree = renderer
      .create(<HomePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});