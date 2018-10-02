import SignupPage from '../signup/SignupPage';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders the signup page correctly', () => {
    const tree = renderer
      .create(<SignupPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});