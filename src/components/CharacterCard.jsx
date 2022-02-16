import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  characterImg: {
    height: 500,
    width: '100%',
    objectFit: 'cover',
  },

});
const CharacterCard = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card>
        <img src={props.item.img} alt="character" className={ classes.characterImg}/>
      </Card>
    </>
  );
};

export default CharacterCard;
