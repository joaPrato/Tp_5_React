import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/PorductService";
import Loader from "../Loader/Loader";
import { Button, Table } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeletetButton from "../DeleteButton/DeleteButton";





const ProductTable=  ()=>{


    
    // var que contiene los datos recibidos 
    const [products,setProducts]=useState <Product[]>([]);

    //Variable que muestra al loader hasta que llegen los productos de la api
    const [isLoading,setIsLoading]= useState(true);

    //Variable que va a actualizar los datos de la tabla luego de cada operacion exitosa
    const [refreshData, setRefreshData] = useState(false);

    //Este hook se va a ejecutar cada vez que se renderize el la tabla
    useEffect(()=>{
        const fethcProduct=async ()=>{
            const products=await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };

        fethcProduct();

    }, [refreshData]  );

    console.log(JSON.stringify(products,null,2));

    const initializableNewProduct = ():Product=>{
        return{
            id:0,
            title:"",
            price:0,
            description:"",
            category:"",
            image:"",
        };
    };
    
    const [product,setProduct]=useState<Product>(initializableNewProduct);
    
    const[showModal,setShowModal]=useState(false);
    
    const [modalType, setModalType]= useState<ModalType>(ModalType.NONE);
    
    const[title,setTitle] =useState("");
    
    //Logica del modal
    const handleClick =(newTitle: string, prod: Product, modal: ModalType)=>{
        setTitle(newTitle);
        setModalType(modal);
        setProduct(prod);
        setShowModal(true);
    };


    return(
        <>
            <Button onClick={() => handleClick("Nuevo Producto",initializableNewProduct(), ModalType.CREATE)}>Nuevo Producto</Button>
            {isLoading ? <Loader/> :
                <Table hover>
                    <thead>
                        <tr>
                            <th>TITULO</th>
                            <th>PRECIO</th>
                            <th>DESCRIPCION</th>
                            <th>CATEGORIA</th>
                            <th>IMAGEN</th>
                            <th>EDITAR</th>
                            <th>BORRAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>(
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td><img src={product.image} alt={product.title} style={{width:'50px'}}/></td>
                                <td> <EditButton onClick={() => handleClick ("Editar producto",product,ModalType.UPDATE)}/> </td>
                                <td> <DeletetButton onClick={()=> handleClick("Borrar producto",product,ModalType.DELETE)}/> </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }

            {showModal && (
                <ProductModal
                show={showModal}
                onHide={()=> setShowModal(false)}
                title={title}
                modalType={modalType}
                prod={product}
                refreshData = {setRefreshData}
                />
            )}
        </>
    )
}
export default ProductTable;