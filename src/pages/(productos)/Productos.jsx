const API='https://dummyjson.com/products?limit=200';
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


const Productos = () => {
  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data)
        setDatos(data.products);
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
              <span className="text-center text-xl">Lista de Productos</span>
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
              Total {datos ? datos.length : 0} Productos
    </div>   
)


const ratingBodyTemplate = (product) => {
  return <Rating value={product.rating} readOnly cancel={false} />;
};
const priceBodyTemplate = (product) => {
  return formatCurrency(product.price);
};



const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

  return (
    <>
        <div className="container-fluid mx-auto px-4 mt-4 ">
        
          <DataTable  stripedRows showGridlines   
                value={datos} 
                filters={filters} 
                header={header} footer={footer} 
                paginator   rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                className="table">
            <Column field="id" header="Id" sortable ></Column>
            <Column field="thumbnail" header="Imagen" 
              body={(rowData) => (
                  <Image src={rowData.thumbnail} alt={rowData.title} width="50" preview  />
              )} 
            />
            <Column field="title"    header="Nombre"     sortable ></Column>
            <Column field="category" header="Categoria" sortable body={(rowData) => rowData.category.toUpperCase()}/>
            <Column field="rating"    header="Rating"  sortable  body={ratingBodyTemplate}></Column>
            <Column field="price"     header="Precio"     sortable body={priceBodyTemplate}></Column>
            <Column field="stock"     header="Stock"      sortable ></Column>
            <Column header="Total" 
                body={(rowData) => {
                    const total = rowData.price * rowData.stock;
                    return `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
                  }} 
              />
           <Column 
              header="Detalle" 
              body={(rowData) => (
                  <Link to={`/detalle/${rowData.id}`}>
                      <Button label="Detalles" className="btn btn-danger" />
                  </Link>
              )} 
            />


          </DataTable>
        </div>
    </>

  )
}

export default Productos