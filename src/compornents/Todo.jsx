import React from 'react';

import Button from './Button';
import InputField from './InputField';
import List from './List';

class Todo extends React.Component {

    constructor() {
        super();
        this.state = {
            task: '',
            todoList: [
                { id: 1, task: '牛乳を買う', flag: false },
                { id: 2, task: '豆乳を買う', flag: true }
            ],
        }

        //おまじない
        // this.setList = this.setList.bind(this);
        this.compTask = this.compTask.bind(this);
        this.delTask = this.delTask.bind(this);
    }

    // 完了処理
    compTask() {
        const nowList = this.state.todoList
        // フラグで分岐してCSS変更する
        this.setState({
            todoList: nowList
        });
    }

    // 削除処理
    delTask() {
        const nowList = this.state.todoList
        // フラグで分岐してリストから削除
        // nowList.map((item, id) => (
        //     item.flag {
        // }
        // ));
        this.setState({
            todoList: nowList
        });
    }

    render() {
        return (
            <div>
                <InputField label="追加" todoList={this.state.todoList} />
                <hr />
                {/* <Button label="完了" onClick={this.compTask} /> */}
                {/* <Button label="削除" onClick={this.delTask} /> */}
                <button label="完了" onClick={this.compTask} >完了</button>
                <button label="削除" onClick={this.delTask} >削除</button>
                <hr />
                <List todoList={this.state.todoList} />
            </div >
        );
    }
}
export default Todo;
