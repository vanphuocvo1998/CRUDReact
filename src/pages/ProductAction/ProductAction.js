import React, {Component} from 'react';

//callapi
import callapi from "./../../utils/CallApi";
import { Link } from 'react-router-dom';
import axios from "axios"

//action
import {AddProductRequest, GetDetailProductRequest, UpdateProductRequest} from "./../../actions/index";

import {connect} from "react-redux";
class ProductAction extends Component {

  constructor(props){
    super(props);
    this.state={
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: ""
    }
  }
  componentDidMount()
  {
    var {match} = this.props;
    if(match)
    {
      var id =match.params.id;
      this.props._GetDetailProduct(id);
    }
  }

  componentWillReceiveProps(nextProps){
  //  console.log("componentWillReceiveProps");
    if(nextProps && nextProps._itemEditting)
    {
      var {_itemEditting} = nextProps;
      this.setState({
        id: _itemEditting.id,
        txtName: _itemEditting.name,
        txtPrice: _itemEditting.price,
        chkbStatus: _itemEditting.status
      });
    }
  }
  onChange =(e)=>{
    var target = e.target;
    var name = target.name;
    var value = target.type=="checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  
  onSave =(e)=>{
    
    e.preventDefault();
      var {txtName, txtPrice, chkbStatus,id} = this.state;
      var {history} = this.props;
      console.log(txtName + "-" + txtPrice + "-" +chkbStatus);
      if(id) //update
      {
         
          var product = new FormData();
          product.set('name',txtName);
          product.set('price',txtPrice);
          product.set('status',chkbStatus===true?"true": "false");
         this.props._UpdateProduct(id,product);
         console.log("update sucess");
         history.goBack();
       
      }
      else //insert
      {
        var product = new FormData();
        product.set('name',txtName);
        product.set('price',txtPrice);
        product.set('status',chkbStatus===true?"true": "false");
        this.props._AddProduct(product);
        console.log("insert sucess");
        history.goBack();
      }
  }
  render(){
    var {txtName, txtPrice, chkbStatus} = this.state;
    return (
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
             <form  onSubmit={this.onSave}>
                <div className="form-group">
                  <label>Tên Sản Phẩm:</label>
                  <input type="text" 
                  className="form-control"
                   name="txtName"
                     value={txtName}
                     onChange={this.onChange}
                   />
                </div>
                <div className="form-group">
                  <label>Giá:</label>
                  <input type="number" 
                  className="form-control" 
                  name="txtPrice"
                  value={txtPrice}
                  onChange={this.onChange}
                  />
                </div>
                <div className="checkbox">
                  <label>
                      <input type="checkbox" 
                      name="chkbStatus"
                      value={chkbStatus}
                       onChange={this.onChange}
                       checked={chkbStatus==="true"? true : false}
                      />
                      còn hàng
                  </label>
                </div>
    
                 <button type="submit" className="btn btn-primary">Lưu</button>
                 <Link to="/product-list" className="btn btn-danger"> Trở Lại</Link>
              </form>
        </div> 
      
    )
  }
}


//lấy item editting trên state
const mapStateToProps = (state)=>{
  return {
    _itemEditting : state.itemEditting
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    _AddProduct : (product)=>{
      dispatch(AddProductRequest(product));
    },

    _GetDetailProduct : id=>{
      dispatch(GetDetailProductRequest(id));
    },
    _UpdateProduct :(id, product) =>{
      dispatch(UpdateProductRequest(id,product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductAction);
