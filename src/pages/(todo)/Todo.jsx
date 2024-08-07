const API='http://localhost:3000/api/todo'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { useRouter } from "next/navigation";
const Todo = () => {
    const [datos, setDatos] = useState([])
    //const router = useRouter();
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data)
        setDatos(data.results);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);


    let completadas = 0;
    let noCompletadas = 0;
    datos.forEach(item => {
      if (item.completado === "Si") {
        completadas++;
      } else {
        noCompletadas++;
      }
    });



  async function eliminar(id){
  if (confirm('¿Estás seguro de eliminar este Todo?')) {
      try {
          const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
          method: 'DELETE',
      });
        if (response.ok) {
          //console.log('Todo eliminado exitosamente');
          window.location.reload();
        } else {
          console.error('Error al eliminar el Todo');
        }
      } catch (error) {
        console.error('Error al eliminar la categoría:', error);
      }
    }
   }


  return (
    <div className="container">
        <h5 className="text-center py-4"> ({datos.length}) Tareas<br />
            ({completadas}) Completados / ({noCompletadas}) Sin Completar
         </h5>
        <div className="row">
            {datos && datos.map((item)=>(
              <div key={item.id}  className='col-md-4 col-xl-3 mb-4'>
              <div className='card h-100' data-bs-theme="dark">
                  <div className='card-header text-center' style={{minHeight:'120px'}}>
                      <p className='fs-5 fw-bold'>{item.tarea}</p>
                  </div>
                  <div className='card-body text-center '>
                      <p>Fecha de Creación:<br />
                        {new Date(item.fechacreacion).toLocaleString()}
                      </p>
                      <h1 className={`badge ${item.completado === 'Si' ? 'bg-success' : 'bg-danger'} fs-5`}>
                        {item.completado === 'Si' ? 'Completado' : 'Sin Completar'}
                      </h1>
                      {item.completado === 'Si' && (
                        <p>
                          Fecha de Realización:<br />
                          {new Date(item.fecharealizacion).toLocaleString()}
                        </p>
                      )}
                  </div>
                  <div className='card-footer text-center'>
                      <button className='btn btn-danger btn-sm me-2'  onClick={() => (eliminar(item.id))}>Eliminar</button>
                      <Link to={`/editar/${item.id}`} className='btn btn-info btn-sm me-2' >Editar</Link>
                      <Link to={`/completado/${item.id}`} className='btn btn-success btn-sm ' >Completado</Link>
                </div>

            </div>
        </div>  
    ))}

</div>
    
    
    </div>


  )
}

export default Todo