import TimersList from './components/TimersList';
import { useState } from 'react/cjs/react.development';
import useInput from './hooks/UseInput';
import CustomButton from './components/UI/Button';
import CustomInput from './components/UI/Input';

import './App.css';

let counter = 0;

function App() {
  const [timers, setTimers] = useState([]);
  const { input, handleInputChange } = useInput();

  const handleNewTimerData = () => {
    if (!input) return
    setTimers(timers => [...timers, { id: counter++, time: input }])
  };

  return (
    <div className="App">
      <div>
        <CustomInput type={'text'} onChange={(e) => handleInputChange(e)} />
        <CustomButton title={'schedule'} onClickCallback={e => handleNewTimerData()} />
      </div>
      <div>
        <TimersList elements={timers} />
      </div>
    </div>
  );
}

export default App;
