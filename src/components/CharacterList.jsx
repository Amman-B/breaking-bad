import CharacterCard from "./CharacterCard";


const CharacterList = (props) => {
    return ( 
        // map method to iterate through data array. data prop declared in app.js
        props.data.map(item => {
                return <CharacterCard item = {item }/>
            })
     );
}

export default CharacterList;