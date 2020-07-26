import * as Types from './../consts/ActionTypes' ;
import axios from 'axios';

export const GetAllProductRequest = ()=>{
    return (dispatch)=>{
        return axios.get('https://localhost:44387/api/Products')
        .then(res=>{
            dispatch(GetAllProduct(res.data));
        })
        .catch(err=> {
            console.log(err);
        });
    }
}

export const GetAllProduct = (products)=>{
    return {
        type: Types.GetAllProduct,
        products
    }
}

// gửi request lên server
export const DeleteProductRequest = (id)=>{
    return (dispatch) =>{
        return  axios.delete(`https://localhost:44387/api/Products/${id}`).then(res=>{
            if(res.status===200)
            {
                 dispatch(DeleteProduct(id));
            }
         }).catch(err=> {
          console.log(err);
          });
    }
}

export const DeleteProduct = (id)=>{
    return {
        type: Types.DeleteProduct,
        id
    }
}

export const AddProductRequest = (product)=>{
    return (dispatch)=> {
        return  axios.post('https://localhost:44387/api/Products/add', product)
        .then(res=>{
            dispatch(AddProduct(res.data));
        })
        .catch(err=> {
            console.log(err);
        });
    }
}

export const AddProduct = (product)=>{
    return {
        type: Types.AddProduct,
        product
    }
}

export const GetDetailProductRequest = (id) =>{
    return (dispatch)=>{
        return  axios.get(`https://localhost:44387/api/Products/${id}`)
          .then(res=>{
              dispatch(GetDetailProduct(res.data));
          })
          .catch(err=> {
              console.log(err);
          });
    }
}

export const GetDetailProduct = (product)=>{
    return {
        type: Types.GetDetailProduct,
        product
    }
}

export const UpdateProductRequest = (id,product) =>{
    return dispatch =>{
        return  axios.put(`https://localhost:44387/api/Products/${id}`, product)
        .then(res=>{
            dispatch(UpdateProduct(res.data));
        })
        .catch(err=> {
            console.log(err);
        });
    }
}

export const UpdateProduct = (product)=>{
    return {
        type: Types.UpdateProduct,
        product
    }
}