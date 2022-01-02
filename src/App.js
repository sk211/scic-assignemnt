import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
