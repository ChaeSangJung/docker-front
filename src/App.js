import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import config from "./config";

function App() {
  const apiUrl = config.API;

  const [isMount, setIsMount] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [testData, setTestData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/test`);
      setIsLoading(true);
      const data = await response.json();
      setTestData(data);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
      setIsLoading(false);
    } finally {
      console.log("API 호출 종료");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (isMount) {
      fetchData();
    }
  }, [isMount]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {!isLoading && (
          <>
            <p>{testData.message}</p>
          </>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
