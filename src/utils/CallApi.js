//axios lấy data
import axios from 'axios';
import * as Config from './../consts/Config';

export default function callapi(endpoint, method="get", data)
{
    return  axios({
        method : method,
        url: `${Config.API_URL}/${endpoint}`,
        data: data,
      }).catch(err=>{
        console.log(err);
      });
}