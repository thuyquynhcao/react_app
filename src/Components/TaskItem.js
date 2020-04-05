import React, { Component } from 'react';

class TaskItem extends Component {
            onUpsdateStatus= () => {
                        this.props.onUpdateStatus(this.props.task.id);
            }

            onDelete = () => {
                         this.props.onDelete(this.props.task.id);
            }

            onUpdate = () => {
                         this.props.onUpdate(this.props.task.id);
            }

              render() {
                        var { task, index } = this.props;
                        return (
                                    <tr>
                                                <td>{ index + 1}</td>
                                                <td> {task.name } </td>
                                                <td className="text-center" >
                                                                <span 
                                                                            className={ task.status === true ? 'label label-danger' : 'label label-success' } 
                                                                            onClick = { this.onUpsdateStatus }
                                                                > { task.status === true ? 'まだ ' : '満期'} </span>
                                                </td>
                                                <td className="text-center" >
                                                                <button 
                                                                            type="button" 
                                                                            className="btn btn-warning"
                                                                            onClick = { this.onUpdate }
                                                                >
                                                                            <span className="fa fa-pencil mr-5"></span>整理
                                                                </button>
                                                                &nbsp;
                                                                <button 
                                                                            type="button"
                                                                            className="btn btn-danger" 
                                                                            onClick = { this.onDelete } >
                                                                            <span className="fa fa-trash mr-5"></span>削除
                                                                </button>
                                                </td>
                                    </tr>
                        );
              }
}

export default TaskItem;
