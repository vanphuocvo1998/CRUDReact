import React, {Component} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

//link
import {Link} from 'react-router-dom';
//connect redux
import {connect} from 'react-redux';
import {GetAllProductRequest, DeleteProductRequest} from "./../../actions/index";
//axios lấy data
import axios from 'axios';

//api
import callapi from './../../utils/CallApi';
class ProductListPage extends Component {

  constructor(props)
  {
    super(props);
  }

  componentDidMount(){
       this.props._GetAllProduct();
  }
  onDelete =(id)=>{
    this.props._DeleteProduct(id);
  }
  ShowProduct = (products)=>{
    var result = null;
    if(products.length > 0)
    {
      result=products.map((product, index)=>{
        return (
           <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} />
        )
      });
    }
    return result;
  }
  render(){
     var {products} = this.props;
    return (
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/product/add" className="btn btn-info"> Thêm Sản Phẩm </Link>
                    <ProductList> {this.ShowProduct(products)} </ProductList>
        </div> 
      
    )
  }
}

// lấy data từ store và hiển thị
const mapStateToProps = (state)=>{
  return {
    products : state.products
  }
}

// lấy data từ server và lưu vào store
const mapDispatchToProps =(dispatch, props)=>{
  return {
    _GetAllProduct : ()=>{
      dispatch(GetAllProductRequest())
    },
    _DeleteProduct : (id)=>{
      dispatch(DeleteProductRequest(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
