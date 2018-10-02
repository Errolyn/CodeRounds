import ContactPage from '../contact/ContactPage';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders the contact page correctly', () => {
    const tree = renderer
      .create(<ContactPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});