import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      editUserOject: {}
    } 
  }

  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp,
      });
    }
  }
  

  getNewUserData = (name,tel,permission) => {
    // phai day data tu adduser sang app vi data tong nam o app
    // dong goi thanh 1 doi tuong
    const item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    // console.log(item);
    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });
    //console.log(items);
    localStorage.setItem('userData',JSON.stringify(items));
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    });
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  editApp = (user) => {
    //console.log(user);
    this.setState({
      editUserOject: user,
    });
    
  }

  getUserEditInfoApp = (info) => {
    //console.log("Thong tin da sua la " + info.name);
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    // day vao du lieu
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  
  
  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    });
    
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
                <div className="row">
                  <Search 
                  getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                  getTextSearchProps = {(dl) => this.getTextSearch(dl)} 
                  ketNoi = {() => this.doiTrangThai()} 
                  hienThiForm = {this.state.hienThiForm} 
                  editUserStatus={this.state.editUserStatus}
                  changeEditUserStatus = {()=> this.changeEditUserStatus()}
                  editUserOject = {this.state.editUserOject}/>
                  <TableData 
                  deleteUser = {(idUser) => this.deleteUser(idUser)}
                  editTableData = {(user)=>this.editApp(user)} 
                  dataUserProps={ketqua}
                  changeEditUserStatus = {()=> this.changeEditUserStatus()}/>
                  <AddUser add = {(name,tel,permission)=>this.getNewUserData(name,tel,permission)} hienThiForm = {this.state.hienThiForm}/>                             
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;