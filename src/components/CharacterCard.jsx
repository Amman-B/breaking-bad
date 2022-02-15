import { Card } from "@mui/material";


const CharacterCard = (props) => {
    return ( 
        <>
            <Card>
                <img src={props.item.img} alt="character" />
        </Card>
        </>
     );
}
 
export default CharacterCard;