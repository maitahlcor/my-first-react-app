import "./App.css";
import image from "./assets/scarecrow.png"

function App() {
  return (
    <div>
      <h4>404 NOT FOUND</h4>
      <div className="container">
        <img
          src={image}
          alt="drCrane"
          className="drCrane"
        />
        <div>
          <h1>I have bad news for you</h1>
          <p>
            the page you are looking for, might be removed or is temporarily
            unavailable
          </p>
          <button className="button">BACK TO HOMEPAGE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
