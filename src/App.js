import Header from "./components/Header/Header";
import Photos from "./components/Photo/Photos";
import { data } from "./data.js";

function App() {
  return (
    <div>
      <Header title="Title" text="Some about text in two lines" />
      <Photos data={data} />
    </div>
  );
}

export default App;
