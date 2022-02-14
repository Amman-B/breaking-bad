import Header from './components/Header';
import { useEffect, useState } from 'react';
import { fetchData } from './service/api';

function App() {
  const [text, setText] = useState("")



  useEffect(() => {   /* useEffect react hook to get data array asynchronously
                      and log it */
    const getData = async () => {
      const result = await fetchData(text)
      console.log(result); //log the data in console
    }
    getData();
  }, [text]); //dependent on text value for when to run the effect again


  return (
    <>
      <Header/>
    </>
  );
}

export default App;
