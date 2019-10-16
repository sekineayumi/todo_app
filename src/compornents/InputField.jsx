import React from 'react';

import Button from './Button';
import PropTypes from 'prop-types';

/**
 * ToDo入力フィールドのコンポ
 */
class InputFeild extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            todoList: props.todoList
        }

        //おまじない
        this.handleTask = this.handleTask.bind(this);
        this.putMsg = this.putMsg.bind(this);
    }

    // stateに保持しておく値を書き換える
    handleTask(event) {
        const inputValue = event.target.value
        this.setState({
            task: inputValue
        });
    }

    //関数
    putMsg() {
        const text = this.state.task
        const aftTodoList = this.state.todoList
        aftTodoList.push({ id: aftTodoList.length + 1, task: text, flag: false });
        //setStateは関数
        this.setState({
            todoList: aftTodoList,//入力値
            task: ''
        });
    }

    render() {
        return (
            <div>
                <input className="textarea" type="text" name="text" value={this.state.task} onChange={this.handleTask} />
                {/* <Button label={this.props.label} onClick={this.putMsg} /> */}
                <button label="追加" onClick={this.putMsg} >追加</button>
            </div>
        );
    }
}

InputFeild.propTypes = {
    label: PropTypes.string.isRequired
}

export default InputFeild;