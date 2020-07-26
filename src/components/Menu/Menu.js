import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true
  },
  {
    name: "Quản Lý Sản Phẩm",
    to: "/product-list",
    exact: false
  }
];

const MenuLink = ({label, to, ActionlyWhenExact})=>{
  return (
    <Route
      path={to}
      exact={ActionlyWhenExact}
      children={({match})=>{
        var active = match ? "active abc" : "";
        return (
        <li className={active}>

           <Link to ={to} className="my-Link"> {label} </Link>

         </li>
        )
      }}
    />
  )
}

class Menu extends Component {
  ShowMenu =(_menus)=>{
    var result =null;
    if(_menus.length !== 0)
    {
        result=_menus.map((menu, index)=>{
            return (
            <MenuLink key={index} label={menu.name} to = {menu.to} ActionlyWhenExact={menu.exact} />
            )
        });
    }
    return result;
}
  render(){
    return (
        <div className="navbar navbar-default">
            <a className="navbar-brand" >CALL API</a>
            <ul className="nav navbar-nav">
                {this.ShowMenu(menus)}
            </ul>
      </div>
      
    )
  }
}

export default Menu;
