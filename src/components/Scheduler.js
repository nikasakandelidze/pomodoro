import React from 'react'
import TasksList from './common/TasksList';
import useInput from '../hooks/UseInput';
import CustomButton from './UI/Button';
import CustomInput from './UI/Input';
import Modal  from './modal/Modal';

import ErrorMessage from './common/ErrorMessage';
import { Typography } from '@material-ui/core';
import useTasks from '../hooks/useTasks';
import { useState } from 'react/cjs/react.development';

import '../styles/Scheduler.css'

let counter = 0;
export default function Scheduler() {
    const [tasks, addTask] = useTasks()
    const { input: timeInput, message: timeInputMessage, handleInputChange: handleTimeInputChange } = useInput({type : "number"});
    const { input: descriptionInput,  handleInputChange: handleDescriptionInputChange } = useInput({type : "string"});
    const [showValidationModal, setShowValidationModal] = useState(false)
    const [isBlurred, setIsBlurred] = useState(false)
  
  
    const handleNewTimerData = () => {
      if (!timeInput) {
        if(!showValidationModal){
          setShowValidationModal(true)
          setIsBlurred(true)
        }
        return
      }
      addTask({id: counter++, time: timeInput, description: descriptionInput})
    };
  
    const handleModalClose = () => {
      setShowValidationModal(false)
      setIsBlurred(false)
    }
  
    const interactiveUiContainerStyle = {
      filter: isBlurred ? 'blur(2px)' : 'blur(0px)'
    };
  
    return (
      <div>
        <div>
            <Modal show={showValidationModal} handleClose={()=>handleModalClose()}>
              <h2>Please set timer to non empty value to schedule a timer.</h2>
            </Modal>
          </div>
        <div className='interactive-ui-container' style={interactiveUiContainerStyle}>
          <div>
            <Typography>Time(Seconds)</Typography>
            <CustomInput onChange={(e) => handleTimeInputChange(e)}/>
            <ErrorMessage message={timeInputMessage}/>
          </div>
          <div>
            <Typography>Description</Typography>
            <CustomInput onChange={(e) => handleDescriptionInputChange(e)} multiline minRows={8} maxRows={8}/>
          </div>
          <CustomButton title={'schedule'} onClickCallback={e => handleNewTimerData()} />
        </div>
        <div>
          <TasksList elements={tasks} />
        </div>
      </div>
    );
}
