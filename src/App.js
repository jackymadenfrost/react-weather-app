import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://jackymadenfrost.com/">Jacky Madenfrost</a> and is{" "}
          <a href="https://github.com/jackymadenfrost/react-weather-app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
