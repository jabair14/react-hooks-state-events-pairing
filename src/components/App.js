import video from "../data/video.js";
import Main from "./Main.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
