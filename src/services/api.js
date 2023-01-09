import axios from "axios";
//Base da api https://api.themoviedb.org/3/
 // URL da api /movie/now_playing?api_key=9393c0ad2f087055e2ce963603619f19

 


 const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
 })

 export default api;