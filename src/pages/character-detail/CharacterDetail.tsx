import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetchCharacterDetailQuery } from '../../graphql/queries/useFetchCharacterDetailQuery'
import "./CharacterDetail.css";
import { Spin, Button, Row, Col } from "antd";

const CharacterDetailPage = () => {

    let params = useParams();
    const navigate = useNavigate();
    const { character, loading } = useFetchCharacterDetailQuery(Number(params?.id));

    useEffect(() => {
        const doc_title = "Rick and Morty";
        const pageTitle = character?.name || "unknown";
        document.title = pageTitle + " | " + doc_title || doc_title;
    }, [character]);

    const getColor = (status: string | undefined) => {
        switch (status) {
            case 'Alive': return 'green';
            case 'Dead': return 'red';
            default: return 'black';
        }
    }

    const infoItems: any = [
        { name: 'Status', value: character?.status, color: getColor(character?.status) },
        { name: 'Species', value: character?.species },
        { name: 'Gender', value: character?.gender },
        { name: 'Origin', value: character?.origin?.name },
        { name: 'Location', value: character?.location?.name },
    ];

    return (<>
        <Row className="character-header-row">
            <Button onClick={() => { navigate('/') }} shape="round" type="dashed" ghost danger>Back </Button>
        </Row>
        {loading && <div style={{ height: "50vh" }}><Spin className="spinner-loading"></Spin></div>}
        {!loading && <div className="character-detail-card">
            <Row>
                <Col span={12}>
                    <Row className="character-image-row">
                        <img
                            className="character-detail-image"
                            alt="character"
                            src={character?.image}
                        />
                    </Row>
                </Col>
                <Col span={12}>
                    <Row className="character-information-row">
                        {infoItems.map((item: any, key: number) => (
                            <div key={key} className="info-item">
                                {item.name}:
                                <span style={{ color: item.color ? item.color : 'black' }}>
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </Row>
                </Col>
            </Row>
            <Row className="character-name-row">{character?.name}</Row>
            <Row className="character-episode-row">
                <Col span={12}>
                    <h1>Episode:</h1>
                    <ul>
                        {character?.episode?.map((episode, index) => {
                            return <li key={`${episode.name} ${index}`}>{episode.name}-({episode.episode})</li>
                        })}
                    </ul>
                </Col>
            </Row>
        </div>}
    </>)
};

export default CharacterDetailPage;