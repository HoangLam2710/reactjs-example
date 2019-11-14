import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: "",
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
        // dong goi thanh 1 doi tuong
        // const item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;

    }
    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true){
            return (
                <div className="col">
                <div className="card border-primary mb-3">
                    <div className="card-header">Thêm mới User vào hệ thống</div>
                    <form>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange = {(event) => this.isChange(event)}
                            type="text"
                            className="form-control"
                            name="name"
                            aria-describedby="helpId"
                            placeholder="Tên user"
                            />
                        </div>
                        <div className="form-group">
                            <input onChange = {(event) => this.isChange(event)}
                            type="text"
                            className="form-control"
                            name="tel"
                            aria-describedby="helpId"
                            placeholder="Điện thoại"
                            />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" required onChange = {(event) => this.isChange(event)} name="permission">
                            <option defaultValue>Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-block btn-primary" onClick = {(name,tel,permission) => 
                                this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới"/>
                        </div>
                    </div>
                    </form>
                </div> 
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div> 
        );
    }
}

export default AddUser;