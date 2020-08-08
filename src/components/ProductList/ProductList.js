import React, {Component} from 'react';

class ProductList extends Component {
  render(){
   
      return (
        <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
              </div>
              <div className="panel-body">
              <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã</th>
                      <th>Hình</th>
                      <th>Tên</th>
                      <th>Nội Dung</th>
                      <th>Giá</th>
                      <th>Sale</th>
                      <th>Trạng Thái</th>
                      <th>Còn Bán</th>
                      <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody> 
                    {this.props.children}
                </tbody>
              </table>
          </div>
      </div>
        
      )
  
  }
}

export default ProductList;
