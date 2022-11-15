import './App.css';
import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { 
        text: '',
        id: uniqid(),
        count: 1,
    },
      tasks: [],
      editing: false,
      currentTask: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.finishEditingTask = this.finishEditingTask.bind(this);
    this.checkCurrentTask = this.checkCurrentTask.bind(this);
    this.setEditTaskText = this.setEditTaskText.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
        count: this.state.task.count,
      },
    });
  }

  handleSubmit(event) {
    // Prevents the page from refreshing
    event.preventDefault(); 
    
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
        count: this.state.task.count + 1,
    },
    });
  };

  deleteTask(taskId) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    })
  }

  editTask(taskId) {
    this.setState({
      editing: true,
      currentTask: this.state.tasks.filter((task) => task.id === taskId),
    })
  }

  setEditTaskText(event) {
    return event.target.value
  }

  finishEditingTask() {
    this.setState({
      editing: false,
    })
  }

  checkCurrentTask() {
    return this.state.currentTask[0]
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="taskInput" value={this.state.task.text} onChange={this.handleChange}></input>
          <button className="submitButton">Submit</button>
        </form>
        <Overview tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} editing={this.state.editing} finishEditingTask={this.finishEditingTask} checkCurrentTask={this.checkCurrentTask} setEditTaskText={this.setEditTaskText}/>
      </div>
    )
  }
}

export default App;