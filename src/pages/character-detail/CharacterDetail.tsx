import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetchCharacterDetailQuery } from '../../graphql/queries/useFetchCharacterDetailQuery'
import "./CharacterDetail.css";
import { Row, Col, Spin, Button } from "antd";

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

    return (<>

        {loading && <div style={{ height: "50vh" }}><Spin className="spinner-loading"></Spin></div>}
        {!loading &&
            <div className="characterDetail">
                <Button onClick={() => { navigate('/') }} shape="round" type="dashed" ghost danger>Back </Button>
                <div className="profile_wrapper">
                    <img src={character?.image} alt="profile image" />
                    <h2>{character?.name}</h2>
                </div>
                <div className="details_wrapper">
                    <b>
                        Origin: {character?.origin?.name}
                        <br />
                        Location: {character?.location?.name}
                        <br />
                        Status: <span style={{ color: getColor(character?.status) }}>{character?.status}</span>
                    </b>
                    <div>
                        <b>Episode:</b>
                        <ul>
                            {character?.episode?.map((episode, index) => {
                                return <li key={`${episode.name} ${index}`}>{episode.name} - ({episode.episode})</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>}
    </>)
};

export default CharacterDetailPage;