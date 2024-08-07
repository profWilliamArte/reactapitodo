const API='http://localhost:3000/api/users';
import { useEffect, useState } from "react";

// para la tabla
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


// para el filtro
import { FilterMatchMode} from 'primereact/api';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

import { Image } from 'primereact/image';
import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";

import { Button } from 'primereact/button';

const Usuarios = () => {
    const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data)
        setDatos(data.results);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);



// para el filtro
const [globalFilterValue, setGlobalFilterValue] = useState('');
const [filters, setFilters] = useState({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
 });
 const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters['global'].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
};
// encabezado de la tabla para el filtro
const renderHeader = () => {
  return (
    <>
      <div className="text-center">
              <span className="text-center text-xl">Lista de Usuarios</span>
      </div>
      <div className="d-flex justify-content-end">
          <IconField iconPosition="">
              <InputIcon className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Filtrar por " className="form-control" />
          </IconField>
      </div>
    </>
  );
};
const header = renderHeader();

const footer = (
    <div className="text-center">
              Total {datos ? datos.length : 0} Usuarios
    </div>   
)


async function eliminar(id){
    if (confirm('¿Estás seguro de eliminar este Usuario?')) {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`, {
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
    <>
    <div className="container-fluid mx-auto px-4 mt-4 ">

      <DataTable stripedRows showGridlines 
            value={datos} 
            filters={filters} 
            header={header} footer={footer} 
            paginator   rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
            className="table">
        <Column field="id"          header="Id"         sortable ></Column>
        <Column field="firstName"   header="Nombre"     sortable ></Column>
        <Column field="lastName"    header="Apellido"   sortable ></Column>
        <Column field="age"         header="Edad"       sortable  ></Column>
        <Column field="gender"      header="Genero"     ></Column>
        <Column field="email"       header="Correo"     sortable ></Column>
        <Column field="phone"       header="Telefono"   sortable ></Column>
        <Column field="role"        header="Rol"        sortable ></Column>
        <Column 
          header="Detalle" 
          body={(rowData) => (
            <>
              <Link to={`/detalle/${rowData.id}`}>
                  <Button label="Detalle" className="btn btn-info btn-sm me-2" />
              </Link>
              <button className='btn btn-danger btn-sm me-2'  onClick={() => (eliminar(rowData.id))}>Eliminar</button>
              <Link to={`/editaruser/${rowData.id}`} className='btn btn-success btn-sm me-2' >Editar</Link>

              </>
              
          )} 
        />


      </DataTable>
      </div>
   
</>
  )
}

export default Usuarios