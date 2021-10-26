import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://jackymadenfrost.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacky Madenfrost
          </a>{" "}
          , open-sourced on{" "}
          <a
            href="https://github.com/jackymadenfrost/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://kind-hoover-e8d028.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
