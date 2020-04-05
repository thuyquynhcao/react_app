import React, { Component } from 'react';

class Sort extends Component {

    onClick = (sortBy , sortValue ) => {
        this.props.onSort(sortBy, sortValue );
    }
      render() {
            return (
                   <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="dropdown">
                                <button 
                                    type="button" 
                                    className="btn btn-primary dropdown-toggle" 
                                    id="dropdownMenu1" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="true">
                                        手順 <span className="fa fa-caret-square-o-down ml-5"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    
                                    <li role="separator" className="divider"></li>
                                    <li onClick = { () => this.onClick('status' , 1 ) } >
                                        <a role="button" className= { ( this.props.sortBy === 'status' && this.props.sortValue === 1 ) ? 'sort_selected' : ' '} >
                                            まだ
                                        </a>
                                    </li>
                                    <li onClick = { () => this.onClick('status' , -1 ) } >
                                        <a role="button" className= { ( this.props.sortBy === 'status' && this.props.sortValue === -1 ) ? 'sort_selected' : ' '} >
                                            満期
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
            );
      }
}

export default Sort;
