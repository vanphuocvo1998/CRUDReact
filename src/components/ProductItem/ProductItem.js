import React, {Component} from 'react';
import {Link} from "react-router-dom";
import swal from 'sweetalert';

class ProductItem extends Component {

  onDelete=(id) =>{  
        this.props.onDelete(id);
      //  swal("Hello world!");
      swal({
        title: "Đã Xóa!",
        text: "",
        icon: "success",
      });
  }
  
  render(){
    var {product, index}= this.props;
    var statusName = product.status==="true" ?"còn hàng": "hết hàng";
    var statusClass = product.status==="true"?"warning":"default";
    return (
                  <tr key ={index}>
                    <td>{index +1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td> <span className={`label label-${statusClass}`}>{statusName}</span> </td>
                    <td>
                      <Link 
                      type="button"
                       className="btn btn-success" 
                       to ={`/product/${product.id}/edit`}
                      >Sửa</Link>
                      <button type="button" className="btn btn-danger" onClick={()=> this.onDelete(product.id)}>Xóa</button>
                    </td>
                  </tr>
    )
  }
}

export default ProductItem;
