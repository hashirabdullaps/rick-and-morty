import React from 'react';
import renderer from 'react-test-renderer';
import CharacterList from '../../containers/character-list/CharacterList';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from "react-router-dom";
import { act } from '@testing-library/react';

describe('CharacterList component', () => {

    test('should test CharacterList component', () => {

        const mocks = [];
        act(() => {
            const component = renderer.create(
                <MockedProvider mocks={mocks} >
                    <BrowserRouter>
                        <CharacterList />
                    </BrowserRouter>
                </MockedProvider>);

            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        })

    });

})

