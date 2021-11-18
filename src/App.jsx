import { AppStateProvider } from "./context/AppContext";
import Employees from "./components/Employees";
import "./App.css";

const App = () => {
  return (
    <AppStateProvider>
      <div className="App">
        <Employees />
      </div>
    </AppStateProvider>
  );
};

export default App;
