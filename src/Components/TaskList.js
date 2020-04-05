import React, { Component } from 'react';
import TaskItem from './TaskItem'

class TaskList extends Component {

      constructor(props){
        super(props);
        this.state = {
          filterName : ' ',
          filterStatus : -1 // all : -1 , active : 1, deactive : 0
        }
      }

      onChange = (event ) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
              name === 'filterName' ? value : this.state.filterName,
              name === 'filterStatus' ? value : this.state.filterStatus
          );
        this.setState({
          [name] : value
        });
      }
      render() {
            var tasks = this.props.tasks_props;
            var { filterName, filterStatus } = this.state;
            var elmTasks = tasks.map((task , index)=>{
                return <TaskItem 
                                key = {task.id} 
                                index={index} 
                                task = {task } 
                                onUpdateStatus = { this.props.onUpdateStatus_props} 
                                onDelete = { this.props.onDelete }
                                onUpdate = { this.props.onUpdate }
                            />
            })
            return (
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center" >番目</th>
                            <th className="text-center" >ジョブ</th>
                            <th className="text-center" >締め切り</th>
                            <th className="text-center" >整理/削除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    value = { filterName }
                                    onChange = { this.onChange }
                                />
                            </td>
                            <td>
                                <select 
                                    className="form-control"
                                    name="filterStatus"
                                    value = { filterStatus }
                                    onChange = { this.onChange }
                                >
                                    <option value={-1} >全部</option>
                                    <option value={0}>満期</option>
                                    <option value={1} >まだ</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        { elmTasks }
                    </tbody>
                </table>
            );
      }
}

export default TaskList;
