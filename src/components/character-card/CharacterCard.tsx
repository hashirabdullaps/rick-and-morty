import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import ICharacter from '../../types/ICharacter'
//styles
import "./CharacterCard.css";

const { Meta } = Card;

const CharacterCard = ({ id, name, image, location }: ICharacter) => {
    const navigate = useNavigate();
    return (
        <Card
            hoverable
            onClick={() => { navigate('/character/' + id) }}
            style={{ width: 300 }}
            cover={
                <img className="character_img" src={image} alt={name} />
            }>
            <Meta
                title={name}
                description={location?.name}
            />
        </Card >
    );
};

export default CharacterCard;
