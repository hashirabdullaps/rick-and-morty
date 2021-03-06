import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import ICharacter from '../../types/ICharacter'
//styles
import "./CharacterCard.scss";

const { Meta } = Card;

const CharacterCard = ({ id, name, image, location }: ICharacter) => {
    const navigate = useNavigate();
    return (
        <div className="character-card">
            <Card
                hoverable
                onClick={() => { navigate('/character/' + id) }}
                style={{ maxWidth: 300 }}
                cover={
                    <img className="character_img" src={image} alt={name} />
                }>
                <Meta
                    title={name}
                    description={location?.name}
                />
            </Card >
        </div>
    );
};

export default CharacterCard;
