import React, { useEffect, useState } from "react";
import { Pagination, Row, Col, Spin, Space, Divider } from "antd";

import CharacterCard from "../../components/character-card/CharacterCard";

import { useFetchCharactersQuery } from "../../graphql/queries/useFetchCharactersQuery";

import "./CharacterList.css";


const CharacterList = () => {
    const {
        characters,
        count,
        loading,
        totalCount,
        currentPage,
        getCharacters,
    } = useFetchCharactersQuery();

    const [pageNum, setPage] = useState(0);


    useEffect(() => {
        getCharacters({ variables: { page: pageNum } });
    }, [getCharacters, pageNum]);

    const onHandleChange = (page: number) => {
        setPage(page)
    }

    return (
        <div className="characterList">
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                {loading && <Row>
                    <Space size="middle">
                        <Spin size="large" />
                    </Space>
                </Row>}
                <Row gutter={[16, 16]}>
                    {characters?.map((character) => {
                        return (<Col key={character.id} flex='1'>
                            <CharacterCard  {...character} />
                        </Col >)
                    })}
                </Row>
                <Divider>
                    <Pagination
                        defaultCurrent={1}
                        current={currentPage}
                        pageSize={count}
                        onChange={onHandleChange}
                        total={totalCount}
                        showSizeChanger={false}
                    />
                </Divider>
            </Space>
        </div>
    );


};

export default CharacterList;