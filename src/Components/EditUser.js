import React, { Component } from 'react';

class EditUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserOject.id,
            name: this.props.editUserOject.name,
            tel: this.props.editUserOject.tel,
            permission: this.props.editUserOject.permission,
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }

    saveButton = () => {
        this.props.changeEditUserStatus() // an form
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
    }
    
    render() {
        return (          
            <div className="row">
                <div className="col">
                    <div className="card border-primary bg-primary mb-3">
                        <div className="card-header bg-info text-white text-center">Sửa thông tin User</div>
                        <form>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange = {(event) => this.isChange(event)} 
                                defaultValue = {this.props.editUserOject.name}
                                type="text"
                                className="form-control"
                                name="name"
                                aria-describedby="helpId"
                                placeholder="Tên user"
                                />
                            </div>
                            <div className="form-group">
                                <input onChange = {(event) => this.isChange(event)} 
                                defaultValue = {this.props.editUserOject.tel}
                                type="text"
                                className="form-control"
                                name="tel"
                                aria-describedby="helpId"
                                placeholder="Điện thoại"
                                />
                            </div>
                            <div className="form-group">
                                <select onChange = {(event) => this.isChange(event)}  defaultValue = {this.props.editUserOject.permission} className="custom-select" required name="permission" >
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="button" className="btn btn-block btn-danger" value="Lưu" onClick={()=>this.saveButton()}/>
                            </div>
                        </div>
                        </form>
                    </div> 
                </div>
            </div>
        );
    }
}

export default EditUser;