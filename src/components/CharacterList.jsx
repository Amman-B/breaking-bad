import { Grid, Container } from "@mui/material";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  return (
    // map method to iterate through data array. data prop declared in app.js
      <Container maxWidth={'xl'}style={{ marginTop: 40 }}>
          
      <Grid container spacing={4}>
        {props.data.map((item) => (
          <Grid item xs={12} md={6} lg={3}>
            <CharacterCard key={item.char_id} item={item} />
          </Grid>
        ))}
          </Grid>
          
    </Container>
  );
};

export default CharacterList;
