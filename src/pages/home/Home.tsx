import { useEffect } from "react";
import CharacterList from "../../containers/character-list/CharacterList";

const HomePage = () => {
    useEffect(() => {
        document.title = "Rick and Morty";
    }, []);
    return (
        <>
            <CharacterList />
        </>
    );

};

export default HomePage;