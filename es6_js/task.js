import React from 'react';
import Task_entity from './task_entity.js';

class Task extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            tasks: [
                'Wash the car',
                'boil water',
                'create react task programm'
            ],
            inputTask:''
        }  
        this.addTask = this.addTask.bind(this);
        this.showTasks = this.showTasks.bind(this);
        this.setTask= this.setTask.bind(this);
        this.handlerem = this.handlerem.bind(this);
    };
    
    showTasks(){
        if(this.state.tasks!=0){
            return(this.state.tasks.map(
                (number,index)=> <Task_entity key={index} value={number} index={index}  handlerem={this.handlerem} array={this.state.tasks}/>
            ));
        }
    }
            
    handlerem(array){
        this.setState({
            tasks: array
        })
    }
            
    addTask(){
        this.setState({
            tasks:this.state.tasks.concat(this.state.inputTask)
        });
    }
    setTask(e){
        this.setState({
            inputTask:e.target.value
        })    
    }
    
    render(){
        return (
            <div>
                <h2>Task tree:</h2>
                <input type="text" defaultValue={this.state.inputTask} onChange={this.setTask} />
                <button onClick={this.addTask}>Add task</button>
                <ul>{this.showTasks()}</ul>
                
            </div>
        );
    };
}
export default Task;