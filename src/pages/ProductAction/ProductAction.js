import React, {Component} from 'react';

//callapi

import { Link } from 'react-router-dom';


//action
import {AddProductRequest, GetDetailProductRequest, UpdateProductRequest} from "./../../actions/index";

import {connect} from "react-redux";
class ProductAction extends Component {

  constructor(props){
    super(props);
    this.state={
      id: "",
      nameBook: "",
      img:"",
      content:"",
      price: "",
      sale: "",
      status:"",
      deleted:""
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
        nameBook: _itemEditting.nameBook,
        img: _itemEditting.img,
        content: _itemEditting.content,
        price: _itemEditting.price,
        sale: _itemEditting.sale,
        status: _itemEditting.status,
        deleted: _itemEditting.deleted
      });
    }
  }
  onChange =(e)=>{
    var target = e.target;
    var name = target.name;
   // var value = target.type=="checkbox" ? target.checked : target.value;
   var value="";
   if(target.type==="checkbox")
    {
      value=target.checked;
    }
    else if(target.type==="file")
    {
      value=target.files[0].name;
    }
    else
    {
      value=  target.value;
    }
    this.setState({
      [name]: value
    });
  }

  
  onSave =(e)=>{
    
    e.preventDefault();
    var {id,nameBook, img, content, price, sale, deleted, status} = this.state;
      var {history} = this.props;
      console.log(nameBook + "-" + img + "-" +content+ "-" + price + "-" +sale+ "-" + deleted + "-" +status);
      if(id) //update
      {
         
          var product = new FormData();
          product.set('nameBook',nameBook);
          product.set('img',img);
          product.set('content',content);
          product.set('price',price);
          product.set('sale',sale);
          product.set('status',status===true?"true": "false");
          product.set('deleted',deleted===true?"true": "false");
         this.props._UpdateProduct(id,product);
         console.log("update sucess");
         history.goBack();
       
      }
      else //insert
      {
        // var product = new FormData();
        // product.set('name',txtName);
        // product.set('price',txtPrice);
        // product.set('status',chkbStatus===true?"true": "false");
        // this.props._AddProduct(product);
        // console.log("insert sucess");
        // history.goBack();
      }
  }
  render(){
    var {nameBook, img, content, price, sale, deleted, status} = this.state;
    return (
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
             <form  onSubmit={this.onSave} encType="multipart/form-data">
                <div className="form-group">
                  <label>Tên Sản Phẩm:</label>
                  <input type="text" 
                  className="form-control"
                   name="nameBook"
                     value={nameBook}
                     onChange={this.onChange}
                   />
                </div>
                <div className="form-group">
                  <label>Hình:</label>
                  <input type="text" 
                  className="form-control"
                   name="img"
                    value={img}
                     onChange={this.onChange}
                   />
                </div>
                <div className="form-group">
                  <label>Chọn Hình:</label>
                  <input type="file" 
                  className="form-control"
                   name="img"
                  
                     onChange={this.onChange}
                   />
                </div>
                <div className="form-group">
                  <label>Nội Dung:</label>
                  <input type="text" 
                  className="form-control"
                   name="content"
                     value={content}
                     onChange={this.onChange}
                   />
                </div>
                <div className="form-group">
                  <label>Giá:</label>
                  <input type="number" 
                  className="form-control" 
                  name="price"
                  value={price}
                  onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Khuyến Mãi:</label>
                  <input type="number" 
                  className="form-control" 
                  name="sale"
                  value={sale}
                  onChange={this.onChange}
                  />
                </div>
                <div className="checkbox">
                  <label>
                      <input type="checkbox" 
                      name="status"
                      value={status}
                       onChange={this.onChange}
                       checked={status==="true"? true : false}
                      />
                      còn hàng
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                      <input type="checkbox" 
                      name="deleted"
                      value={deleted}
                       onChange={this.onChange}
                       checked={deleted==="true"? true : false}
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
