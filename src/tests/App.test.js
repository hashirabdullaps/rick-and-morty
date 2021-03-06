import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import { BrowserRouter } from "react-router-dom";
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';

test('should render App', () => {
  act(() => {
    const mocks = [];

    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter><App /></BrowserRouter>
      </MockedProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

});
