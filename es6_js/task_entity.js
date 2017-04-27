import React from 'react';

class Task_entity extends React.Component{
    constructor(props){
        super(props);
        
        this.remove = this.remove.bind(this);
    }
    remove(){
        let arr = this.props.array;
        arr.splice(this.props.index,1);
        this.props.handlerem(arr);
    }
    
    render(){
        return <li>{this.props.value} <input type="button" value="del" onClick={this.remove}  /> </li>;
    }
}

export default Task_entity;