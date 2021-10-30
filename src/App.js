import Topbar from "./components/topbar/Topbar.jsx" 
import Sidebar from "./components/sidebar/Sidebar.jsx" 
import Home from "./pages/home/Home.jsx" 
import "./app.css"


function App() {
  return (
    <div>
      <Topbar/>

      <div className="container">
        <Sidebar/>
        <Home />
      </div>

    </div>
  );
}

export default App;
