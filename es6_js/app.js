import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task.js';

class App extends React.Component{
    render(){
        return <Task />;
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('app')
);