import Header from "./components/Header";
import { useEffect, useState } from "react";
import { fetchData } from "./service/api";
import CharacterList from './components/CharacterList';
function App() {
  const [text, setText] = useState(""); //set initial text state to empty string
  const [data, setData] = useState([]); //set initial data state to an array

  useEffect(() => {
    /* useEffect react hook to get data array asynchronously */

    const getData = async () => {
      const result = await fetchData(text);
      setData(result.data);
      console.log(result); //log the data in console
    };

    getData();

  }, [text]); //dependent on text value for when to run the effect again

  const getText = (text) => {
    setText(text);
    console.log(text);
  }

  return (
    <>
      <Header getText={getText} />
      <CharacterList data={data} />
    </>
  );
}

export default App;
