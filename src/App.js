import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import VideoContent from "./Components/VideoContent";
import Filter from "./Components/VideoFilter";
import "./Styles/App.css";
function App() {
  return (
    <div>
      {Header()}
      {Filter()}
      {SideBar()}
      {VideoContent()}
    </div>
  );
}

export default App;
