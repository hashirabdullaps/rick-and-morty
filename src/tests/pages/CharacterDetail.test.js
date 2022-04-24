import React from 'react';
import renderer from 'react-test-renderer';
import CharacterDetailPage from '../../pages/character-detail/CharacterDetail';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from "react-router-dom";

const mocks = [];
test('should test Character Detail component', () => {
    const component = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <BrowserRouter>
                <CharacterDetailPage />
            </BrowserRouter>
        </MockedProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});