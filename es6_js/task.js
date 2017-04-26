import React from 'react';

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
    };
    
    showTasks(){
        let arr = this.state.tasks.map(
            (number,index)=> <li key={index}>{number}</li>
        );
        return arr;
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
                {this.showTasks()}
            </div>
        );
    };
}
export default Task;