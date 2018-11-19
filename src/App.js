import React, { Component } from 'react';
import './components/todo.css';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.png';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tickAll : false,
      currentState : 'all',
      todoItem : 
    [
    {title : 'Di choi',isComplete : false},
    {title: 'Di Da Bong',isComplete : false},
    {title: 'Di hoc',isComplete : false},
    {title : 'Di an',isComplete : false}
  ]
};
this.onKeyUp = this.onKeyUp.bind(this);
this.active = this.active.bind(this);
this.all = this.all.bind(this);
this.completed = this.completed.bind(this);
this.tickAll = this.tickAll.bind(this);
}
  onItemClicked(item){
    return (event) =>{
      const isComplete = item.isComplete;
      const { todoItem } = this.state;
      const index = todoItem.indexOf(item);
      this.setState({
        todoItem : [
          ...todoItem.slice(0,index),
          {
            ...item,
            isComplete : !isComplete
          },
          ...todoItem.slice(index + 1)
        ]
      });
      console.log(todoItem);
    }
  }
  onKeyUp(event){

    if(event.keyCode === 13){
      let text = event.target.value;
      text = text.trim();
      // console.log(text);
      this.setState({
        todoItem : [
          {title : text, isComplete : false},
          ...this.state.todoItem
        ]
      });
      let inputText = document.getElementById("input");
      inputText.value = "";
    }
  }
  active(){
    const { currentState, todoItem } = this.state;
    this.setState({ currentState : 'active' });
  }
  all(){
    const { currentState, todoItem } = this.state;
    this.setState({ currentState : 'all' });

    
  }
  completed(){
    const { currentState, todoItem } = this.state;
    this.setState({ currentState : 'completed' });
    
  }
  tickAll(){
    let { todoItem, tickAll } = this.state;
    // this.setState({
    //   todoItem : todoItem.map(item =>{  return {title : item.title, isComplete : !item.isComplete}  })
    // });
    this.setState({ tickAll : !tickAll });
   
  }
  render() {
    let { currentState, todoItem, tickAll } = this.state;
   
    if(currentState === 'active'){
      todoItem = todoItem.filter((item) =>{
        return item.isComplete === false;
      })
     
    }else if(currentState === 'completed'){
      todoItem = todoItem.filter((item) =>{
        return item.isComplete === true;
      })
    }else{
      todoItem = todoItem.filter((item) =>{
        return item;
      })
    }
    if(tickAll === true){

        todoItem = todoItem.map(item =>{  return {title : item.title, isComplete : true}  });
    
    }
    console.log(todoItem);

  
    
    return (
      <div className="App">
      <div className="header">
          <img onClick={this.tickAll} src={tick} alt=""/>
          <input placeholder = "Add New Item" onKeyUp={this.onKeyUp}  id="input"></input>
      </div>
        {todoItem.length > 0 && todoItem.map((item, index) => 
        <TodoItem key={index} item={item} onClick={this.onItemClicked(item)}/>
        )
        }
        {todoItem.length === 0 && <div> nothing here. </div>}
         
            <div className="footer">
              <div onClick={this.all}>All</div>
              <div onClick={this.active}>Active</div>
              <div onClick={this.completed}>Completed</div>
            </div>
      </div>
     
    );
  }
}

export default App;
