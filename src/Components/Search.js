import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            //userObj:{}
        }
    }
    

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearchProps(this.state.tempValue);
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return <div className="btn btn-block btn-outline-secondary" onClick = {this.props.ketNoi}>Đóng lại</div>
        }
        else{
            return <div className="btn btn-block btn-outline-info" onClick = {this.props.ketNoi}>Thêm mới</div>
        }
    }

    getUserEditInfo = (info) => {
        // this.setState({
        //     userObj: info
        // });
        // khong can su dung setState vi info nhan duoc tu EditUser se truyen thang len cho App 
        this.props.getUserEditInfoApp(info);
    }

    isShowEditUser = () => {
        if(this.props.editUserStatus === true){
            return <EditUser getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            editUserOject = {this.props.editUserOject}/>
        }
    }

    render() {
        return (
            <div className="col-12">
                {this.isShowEditUser()}
                <div className="row">
                    <div className="col-9">                
                        <div className="form-group">
                            <div className="btn-group">
                            <input onChange = {(event) => this.isChange(event)}
                                type="text"
                                className="form-control"
                                placeholder="Nhập từ khóa"
                            />
                            <div className="btn btn-info" onClick = {(dl) => this.props.getTextSearchProps(this.state.tempValue)}>Tìm</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        {this.hienThiNut()}
                    </div>
                </div>
                <hr/>
            </div>

        );
    }
}

export default Search;