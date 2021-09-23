import { useState } from "react/cjs/react.development";


const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const validateInputTask = (task) => {
        return task.id && task.time && (task.description || task === "")
    };

    const addTask = (task) => {
        let isValidTask = validateInputTask(task);
        if(isValidTask){
            setTasks([task, ...tasks])
        }
    };

    return [tasks, addTask]
};

export default useTasks;