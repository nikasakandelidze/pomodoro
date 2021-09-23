import TasksList from './components/TasksList';
// import { useState } from 'react/cjs/react.development';
import useInput from './hooks/UseInput';
import CustomButton from './components/UI/Button';
import CustomInput from './components/UI/Input';

import './App.css';
import ErrorMessage from './components/ErrorMessage';
import { Typography } from '@material-ui/core';
import useTasks from './hooks/useTasks';

let counter = 0;

function App() {
  const [tasks, addTask] = useTasks()
  // const [timers, setTimers] = useState([]);
  const { input: timeInput, message: timeInputMessage, handleInputChange: handleTimeInputChange } = useInput({type : "number"});
  const { input: descriptionInput,  handleInputChange: handleDescriptionInputChange } = useInput({type : "string"});

  const handleNewTimerData = () => {
    if (!timeInput) return
    addTask({id: counter++, time: timeInput, description: descriptionInput})
    // setTimers(timers => [...timers, { id: counter++, time: timeInput }])
  };

  return (
    <div className='App'>
      <div className='interactive-ui-container'>
        <div>
          <Typography>Time</Typography>
          <CustomInput onChange={(e) => handleTimeInputChange(e)}/>
          <ErrorMessage message={timeInputMessage}/>
        </div>
        <div>
          <Typography>Description</Typography>
          <CustomInput onChange={(e) => handleDescriptionInputChange(e)} multiline minRows={8} maxRows={10}/>
        </div>
        <CustomButton title={'schedule'} onClickCallback={e => handleNewTimerData()} />
      </div>
      <div>
        <TasksList elements={tasks} />
      </div>
    </div>
  );
}

export default App;
