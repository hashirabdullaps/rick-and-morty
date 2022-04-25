import { useEffect } from "react";
import { Spin } from "antd";

import CharacterCard from "../../components/character-card/CharacterCard";

import { useFetchCharactersQuery } from "../../graphql/queries/useFetchCharactersQuery";

import "./CharacterList.scss";
import InfiniteScroll from "react-infinite-scroll-component";


const CharacterList = () => {
    const {
        characters,
        count,
        currentPage,
        nextPage,
        getCharacters,
        fetchMoreCharacters
    } = useFetchCharactersQuery();

    useEffect(() => {
        getCharacters({ variables: { page: 1 } });
    }, [getCharacters]);


    const loadMore = () => nextPage !== null && fetchMoreCharacters(currentPage + 1);

    return (
        <div className="characterList">
            <h1>All Characters</h1>
            <InfiniteScroll
                className="characterList_scroll"
                dataLength={count}
                next={loadMore}
                hasMore={true}
                loader={nextPage !== null ? <Spin className="spinner-loading" size="large" /> : <></>}
            >
                <div className="card-grid">
                    {characters?.map((character) => {
                        return (<CharacterCard key={character?.id} {...character} />)
                    })}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default CharacterList;