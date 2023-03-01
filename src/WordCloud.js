import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";

function WordCloud() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetchAndParseData();
  }, []);

  const fetchAndParseData = async () => {
    try {
      const data = await (
        await fetch(`${process.env.REACT_APP_SERVER_URL}/sampleClasses`)
      ).json();
      let mapping = [];
      for (let key of Object.keys(data)) {
        mapping.push({ text: key, value: data[key] });
      }
      console.log(mapping);
      setWords(mapping);
    } catch (error) {
      throw error;
    }
  };

  return words.length === 0 ? <p>Failed to fetch</p> : <ReactWordcloud words={words} />;
}

export default WordCloud;
