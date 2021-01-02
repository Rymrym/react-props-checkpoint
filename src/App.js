import './App.css';
import Profile from './profile/Profile';
import orange from './orange.jpg'

function App() {
  let fullName ='Rym Haouachi';
  const handleName =()=>{
    alert ("Hello "+fullName);
  }
  return (
    <>
 
    
    <Profile handleName={handleName} fullName = {fullName} profession='Developer'>
      <img src ={orange} alt=''/>
    </Profile>
    
    
    </>
  );
}

export default App;
