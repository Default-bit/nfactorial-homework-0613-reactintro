import './App.css';
import { format } from 'date-fns';
import logo from './img/logo.png'; 

function App() {
  return (
    <>
      <div className='header'>
        <div className='header2'>
          <img id='logo' src={logo} alt="logo of fb" />
          <input id='input' type="text" />
        </div>
        
        <div className='date'>
          {format(new Date(), `dd.MM.yyyy hh:mm`)}
        </div>
      </div>
      <div className='row'>

        <div className='text1'>Hey</div>
  
        <div className='text2'>Let`s</div>
    
        <div className='text3'>Give</div>

        <div className='text4'>All</div>

        <div className='text5'>You Can</div>

    </div>

    </>

  );
}

export default App;
