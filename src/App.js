import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navigation />
      {/* Main -> Header | Board */}
      <Dashboard />
    </div>
  );
}

export default App;
