
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewItem from './components/NewItem';
import ViewItems from './components/ViewItems';
import store from './components/store/store';
import { Provider } from 'react-redux';
import EditItem from './components/EditItem';

function App() {
  return (
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<ViewItems />} />
          <Route path="/newitem" element={<NewItem />} />
          <Route path="/edititem" element={<EditItem />} />
        </Routes>
    </Provider>
  );
}

export default App;
