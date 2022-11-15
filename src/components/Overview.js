import React from "react";

const Overview = (props) => {
    const { tasks, deleteTask, editTask, editing, finishEditingTask, checkCurrentTask, setEditTaskText } = props; 

    return (
        <ul>
            {tasks.map((task) => {
                return <div>
                    {/* <button onClick={() => checkCurrentTask(task.id)}>test</button> */}
                    {editing ? (
                        <div>
                            { checkCurrentTask() === task ? (
                                <div>
                                    <input onChange={(e) => task.text = setEditTaskText(e)} type="text" defaultValue={task.text}></input>
                                    <button onClick={(() => finishEditingTask())}>Done</button>
                                </div>
                            ) : 
                                <li key={task.id}>{task.count} {task.text}</li>
                            }
                        </div>
                    ) : (
                        <li key={task.id}>{task.count} {task.text}</li>
                    )}
                    <button onClick={() => editTask(task.id)}>Edit</button>
                    <button key={task.count} onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            })}
        </ul>
    );
};

export default Overview;