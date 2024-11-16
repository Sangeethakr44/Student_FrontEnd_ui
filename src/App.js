import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import StudentTable from './Components/StudentTable';
import CourseTable from './Components/CourseTable';
import Enrollment from './Components/Enrollment';
function App() {
  return (
    <Routes>
       <Route path='/' element={
<>
<Nav></Nav>
<Dashboard/>
</>
      }></Route> 
      <Route path='/login' element ={<Login />}></Route>
      <Route path='/student' element ={<StudentTable />}></Route>
      <Route path='/course' element ={<CourseTable />}></Route>
      <Route path='/enrollment' element ={<Enrollment />}></Route>



      </Routes>
  );
}

export default App;
