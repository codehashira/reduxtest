import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Navigation } from "./components/Navigation";
import { Provider } from 'react-redux'
import store from '../src/app/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* Navigation */}
        <Navigation />
        {/* Main -> Header | Board */}
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
