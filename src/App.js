// import logo from './logo.svg';
import './App.css';


// componant
import AddUser from './component/AddUser';
import NavBar from './component/NavBar';
import CodeforInterview from './component/CodeforInterview';
import AllUser from './component/AllUser';
import EditUser from './component/EditUser';

import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
     <Route path='/' element= {<CodeforInterview />} />
     <Route path='/all' element={<AllUser />} />
     <Route path='/add' element={<AddUser />} />
     <Route path='/edit/:id' element={<EditUser />} />
     </Routes>

    </BrowserRouter>
  );
}

export default App;
