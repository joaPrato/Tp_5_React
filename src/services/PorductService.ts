import { Product } from "../types/Product";

const BaseURL='https://fakestoreapi.com';

export const ProductService ={

    //Desclaramos nuestros metodos que van a consumir la api

    getProducts: async () :Promise <Product[]> =>{ // estamos diciendo que es una funcion asincrona pero con el await le decimo que espere la respuesta del fetch ya sea aceptado o rechazado
        const response = await fetch(`${BaseURL}/products`)
        const data= await response.json();

        return data;
    } ,

    getProduct: async (id: number ):Promise <Product> =>{
        const response =await fetch(`${BaseURL}/product/${id}`);
        const data = await response.json();

        return data;
    },

    createProduct: async (product: Product):Promise <Product>=>{
        const response =await fetch(`${BaseURL}/product`,{
            method:"POST",
            headers:{
                'Content-Type':'aplication/json'
            },
            body: JSON.stringify(product)
        });
        const data= await response.json();
        return data;
    },

    updateProduct : async (id:number,product:Product):Promise <Product>=>{
        const response = await fetch(`${BaseURL}/product/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'aplication/json'
            },
            body: JSON.stringify(product)
        });
        const data =await response.json();
        return data;
    },

    deleteProduct : async (id:number):Promise <void> =>{
        await fetch(`${BaseURL}/product/${id}`,{
            method:"DELETE"
        });
    },

}  