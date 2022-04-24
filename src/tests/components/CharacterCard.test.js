import React from 'react';
import renderer from 'react-test-renderer';
import CharacterCard from '../../components/character-card/CharacterCard';
import { BrowserRouter } from "react-router-dom";

describe('CharacterCard component', () => {

    const initialState = {
        id: 1,
        name: "test",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        location: "earth",
        status: 'Alive'
    };

    test('should test CharacterCard component', () => {
        const component = renderer.create(
            <BrowserRouter>
                <CharacterCard {...initialState} />
            </BrowserRouter>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
