
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewItem from '../src/components/NewItem/NewItem';
import ViewItems from '../src/components/ViewItems/ViewItems';
import store from './components/store/store';
import { Provider } from 'react-redux';
import EditItem from '../src/components/EditItem/EditItem';
import NavigationBar from '../src/components/Navbar/NavigationBar';

function App() {
  return (
    <Provider store={store}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ViewItems />} />
          <Route path="/newitem" element={<NewItem />} />
          <Route path="/edititem" element={<EditItem />} />
        </Routes>
    </Provider>
  );
}

export default App;
