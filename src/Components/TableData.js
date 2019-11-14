import React, { Component } from 'react';
import TableDataRows from './TableDataRows';

class TableData extends Component {
    
    deleteButtonClick = (idUser) => {
        //console.log(idUser);
        this.props.deleteUser(idUser);
    }

    mappdingDataUser = () => this.props.dataUserProps.map((value,key) => (
        <TableDataRows deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            editTableDataClick = {(user) => this.props.editTableData(value)}
            key = {key} 
            stt = {key+1}
            id = {value.id}
            userName = {value.name} 
            userTel = {value.tel} 
            userPer = {value.permission}
            changeEditUserStatus = {()=> this.props.changeEditUserStatus()}/>
    ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover text-center">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappdingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;