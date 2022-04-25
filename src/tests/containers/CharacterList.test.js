import React from 'react';
import renderer from 'react-test-renderer';
import CharacterList from '../../containers/character-list/CharacterList';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';

const mocks = [];

test('should test CharacterList component', () => {

    act(() => {
        const component = renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BrowserRouter>
                    <CharacterList />
                </BrowserRouter>
            </MockedProvider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

});