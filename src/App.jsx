// import moduleName from 'a';
import { AppStateProvider } from './context/AppContext';
import BirthdayList from './components/birthdayList/Birthday list';

import './App.css';

const App = () => {
  return (
    <AppStateProvider>
      <div className="App">
        <p>React</p>
        <BirthdayList />
      </div>
    </AppStateProvider>
  );
}

export default App;
