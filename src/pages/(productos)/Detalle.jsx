const API='https://dummyjson.com/products/'

import { Rating } from "primereact/rating";
import { useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { Image } from 'primereact/image';
import { Galleria } from 'primereact/galleria';
const Detalle = () => {

    const [datos, setDatos] = useState([])
    const [status, setStatus] = useState(false)
    const params = useParams()
    let URI=API+params.id
    const getDatos = async () =>{
        try {
          const response = await fetch(URI);
          const data = await response.json();
          setDatos(data);
          setStatus(true)
        } catch (error) {
          console.error(error)
          setStatus(false)
        }
      };
      useEffect(()=>{
        getDatos();
      },[params.id]);
      const navigate = useNavigate();
        console.log(datos.images)
      if(status===404 || status===false ){
        return(
          <div className="text-center">
            <h3 className="py-4">No se encontraron resultados para {params.name}</h3>
            <a href="#" className="btn btn-dark " onClick={() => navigate(-1)}>
              Volver
            </a>
          </div>
         
        )
      }
      const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];
    const itemTemplate = (item) => {
        return <img src={item} alt={item.alt} style={{ width: '100%' }} />
   
    }
    const thumbnailTemplate = (item) => {
        return <img src={item} alt={item.alt} />
    }

  return (
    <div className="container mx-auto px-4 ">
      <h3  className="text-center py-4">Detalle del Producto </h3>
        <div className="row">
                <div className="col-md-4 text-center p-4"> 
                {datos.images && datos.images.length > 1 ? (
                    <div className="card">
                        <Galleria 
                            value={datos.images} 
                            responsiveOptions={responsiveOptions} 
                            numVisible={5} 
                            item={itemTemplate} 
                            showIndicators  
                        />
                    </div>
                ) : (
                    <img src={datos.thumbnail} alt="" className="img-fluid " />
                )}


                </div>
                <div className="col-md-8 py-4 lead border-start">
                        <h3>
                          <b>Nombre:</b> {datos.title} 
                        </h3>
                        
                         <p>
                        <b>Sku:</b> {datos.sku} <br/>
                        <b>Categoria:</b> {datos.category}<br/> 
                        <b>Marca:</b> {datos.brand} <br/>
                        <b>tags:</b> {datos.tags?.join('/ ') || 'N/A'}<br/>
                        <b>Peso:</b> {datos.weight} Kilos <br/>
                        <b>Dimensiones: </b>{datos.dimensions && Object.values(datos.dimensions).join(', ')} <br/>
                        <b>Garantia:</b> {datos.warrantyInformation}<br/> 
                        <b>Envío:</b> {datos.shippingInformation} <br/>
                        <b>Disponibilidad:</b> {datos.availabilityStatus}<br/>
                        <b>política de devoluciones:</b> {datos.returnPolicy}<br/>
                        <b>Cantidad mínima de pedido :</b> {datos.minimumOrderQuantity}<br/>
                        <span className="d-flex gap-2"><b>Rating:</b> <Rating value={datos.rating} readOnly cancel={false} /></span>
                        <b>Stock:</b> {datos.stock}</p>
                    <p className="text-danger fs-4 fw-bold"><b>Precio:</b> {datos.price}</p>

                    <a href="#" className="btn btn-warning py-2 px-4" onClick={() => navigate(-1)}>
                            Volver
                    </a>

                </div>
                
            </div>
            
        

            <div className="p-4">
                <p className="my-4"><b>Descripción:</b> {datos.description}</p>  
           
                <p><b>Comentarios:</b>
                {datos.reviews.map((review, index) => (
                    <div key={index} className="review p-4 border-b ">
                        <h3 className="text-lg font-bold">
                            <Rating value={review.rating} readOnly cancel={false} />
                        </h3>
                        <p className="text-sm">{review.comment}</p>
                        <p className="text-xs text-gray-500">
                            {new Date(review.date).toLocaleDateString()} - {review.reviewerName}
                        </p>
                    </div>
                ))}
                </p>
      
      </div>
    </div>
    
  )
}

export default Detalle