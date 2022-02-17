import { Card, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  characterImg: {
    height: 500,
    width: "100%",
    objectFit: "cover",
  },
});

const CharacterCard = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card>
        <Tooltip
          followCursor
          arrow
          zoom="true"
          title={
            <>
              {/* Tooltip information that shows upon hovering over character cards */}
              <Typography>Actor Name: {props.item.portrayed}</Typography>
              <Typography>Character Name: {props.item.name}</Typography>
              <Typography>Character Nickname: {props.item.nickname}</Typography>
              <Typography>Occupation: {props.item.occupation[0]}</Typography>
              <Typography>Vital Status: {props.item.status}</Typography>
              <Typography>
                Seasons: {props.item.appearance.join(", ")}
              </Typography>
            </>
          }
        >
          {/* Image for each card */}
          <img
            src={props.item.img}
            alt="character"
            className={classes.characterImg}
          />
        </Tooltip>
      </Card>
    </>
  );
};

export default CharacterCard;
