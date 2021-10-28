import Topbar from "./components/topbar/Topbar.jsx" 
import Sidebar from "./components/sidebar/Sidebar.jsx" 
import "./app.css"


function App() {
  return (
    <div>
      <Topbar/>

      <div className="container">
        <Sidebar/>
      </div>

    </div>
  );
}

export default App;
