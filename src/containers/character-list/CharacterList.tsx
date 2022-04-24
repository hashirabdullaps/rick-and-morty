import React, { useEffect } from "react";
import { Row, Col, Spin } from "antd";

import CharacterCard from "../../components/character-card/CharacterCard";

import { useFetchCharactersQuery } from "../../graphql/queries/useFetchCharactersQuery";

import "./CharacterList.css";
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
    }, []);


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
                <Row gutter={[16, 16]} justify="center">
                    {characters?.map((character) => {
                        return (<Col key={`${character.id} - ${character.name}`} flex='1'>
                            <CharacterCard  {...character} />
                        </Col >)
                    })}
                </Row>
            </InfiniteScroll>
        </div>
    );


};

export default CharacterList;