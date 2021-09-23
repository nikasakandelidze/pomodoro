import TimersList from './components/TimersList';
import { useState } from 'react/cjs/react.development';
import useInput from './hooks/UseInput';
import CustomButton from './components/UI/Button';
import CustomInput from './components/UI/Input';

import './App.css';
import ErrorMessage from './components/ErrorMessage';

let counter = 0;

function App() {
  const [timers, setTimers] = useState([]);
  const { input, message, handleInputChange } = useInput({type : "number"});

  const handleNewTimerData = () => {
    if (!input) return
    setTimers(timers => [...timers, { id: counter++, time: input }])
  };

  return (
    <div className='App'>
      <div className='interactive-ui-container'>
        <CustomInput type={'text'} onChange={(e) => handleInputChange(e)} helperMessage ={message} />
        <ErrorMessage message={message}/>
        <CustomButton title={'schedule'} onClickCallback={e => handleNewTimerData()} />
      </div>
      <div>
        <TimersList elements={timers} />
      </div>
    </div>
  );
}

export default App;
