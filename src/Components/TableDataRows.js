import React, { Component } from 'react';

class TableDataRows extends Component {

    permissonShow = () => {
        if(parseInt(this.props.userPer,20) === 1){
            return "Admin";
        }
        else if (parseInt(this.props.userPer,20) === 2){
            return "Modelrator";
        }
        else{
            return "Normal User";
        }
    }

    editTableDataRows = () => {
        this.props.editTableDataClick()
        this.props.changeEditUserStatus()
    }

    deleteButtonClick = (idUser) => {
        //console.log("id phan tu la" + idUser);
        this.props.deleteButtonClick(idUser);
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.userTel}</td>
                <td>{this.permissonShow()}</td>
                <td>
                <div className="btn-group" >
                    <div className="btn btn-warning sua" onClick = {() => this.editTableDataRows()}>
                        <i className="fa fa-edit" />
                        Sửa
                    </div>
                    <div className="btn btn-danger xoa" onClick = {(idUser) => this.deleteButtonClick(this.props.id)}>
                        <i className="fa fa-trash" aria-hidden="true" />
                        Xóa
                    </div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRows;