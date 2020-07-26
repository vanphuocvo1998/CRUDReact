import * as Types from "./../consts/ActionTypes";

var initialState = [
    
];

var findIndex = (products,id) =>{
    var vitri = -1
    products.forEach((item, index) => {
        if(item.id === id)
        {
            vitri= index;
        }
          
    });
    return vitri;
 }

const products = (state = initialState, action)=>{
    var index =-1;
    var {product} = action; // action.product
    switch(action.type)
    {
        case Types.GetAllProduct:
            state = action.products;
            return [...state];
        case Types.DeleteProduct:
            state = state.filter( product => product.id !== action.id ); // xóa phần tử trong state, lấy ra các phần tử khác phần tử vừa xóa
            return [...state];
        case Types.AddProduct:
            state.push(action.product);
            return [...state];
        case Types.UpdateProduct:
             index = findIndex(state, product.id)
             state[index]=product;
            return [...state]
        default: return [...state];
    }
}

export default products;