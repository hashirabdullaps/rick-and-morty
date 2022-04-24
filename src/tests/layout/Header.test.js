import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../layout/header/Header';
import { BrowserRouter } from "react-router-dom";

test('should test Header component', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});