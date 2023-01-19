import "./App.css";
import { client } from "./client";

function App() {
  client.fetch(`*[_type == 'testimonials']`).then((data) => console.log(data));
  return <div className="App">test.</div>;
}

export default App;
