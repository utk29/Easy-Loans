import { useState } from 'react';
import AdminDashboard from './adminDashboard';
import './App.css';
import Dashboard from './dashboard';
import { NavBar } from './dashboard/navBar';
import { UserDashboard } from './userDashboard';

function App() {
  const [renderScreen, setRenderScreen] = useState('Home');
  
  const comp = () =>{
    if(renderScreen === 'UserDashboard'){
      return <UserDashboard/>
    }
    if(renderScreen === 'Adim Dashboard'){
      return <AdminDashboard/>
    }
 
    return <Dashboard/>
  }
  return (
    <>
      <NavBar setRenderScreen={setRenderScreen}/>
      {comp()}
    </>
  );
}

export default App;
