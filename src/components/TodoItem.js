import React, { Component } from 'react';
import check from '../img/check.png';
import checked from '../img/checked.png';

var classNames = require('classnames');
class TodoItem extends Component{

    // constructor(){
    //     super();
    //     this.state = {isComplete : true};
    //     this.click = this.click.bind(this);
    // }
    // click(){
    //     this.setState({isComplete : false});
    // }
    render(){
         const { item, onClick } = this.props;
        //  let className = "todo-item";
        // if(item.isComplete){
        //     className += ' todo-complete';
        // }
        // if(this.state.isComplete){
        //     className += ' todo-complete';
        let url = check;
        if(item.isComplete){
            url = checked;
        }
        // }
        return(
            <div  className={classNames('todo-item',{'todo-complete' : item.isComplete})}>
                <img onClick={onClick} src={url} width="32" height="32" alt=""/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
export default TodoItem;