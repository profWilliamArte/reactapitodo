import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Completado = () => {
    const params = useParams()

    const [tarea, setTarea] = useState("");
    const [fecharealizacion, setFecharealizacion] = useState("");
    const [message, setMessage] = useState("");
    let completado = "Si"

    async function fetchData() {
      if (params.id) {
          const res = await fetch(`http://localhost:3000/api/todo/${params.id}`);
          const data = await res.json();
          setTarea(data.tarea);
          setFecharealizacion(new Date(data.fecharealizacion).toISOString().slice(0, 10));

      }
  }
    useEffect(() => {
        fetchData();
    }, [params.id]);

 const manejoTarea = (e) => {
    setTarea(e.target.value)
 }

 const manejoFecha = (e) => {
    setFecharealizacion(e.target.value)
  }

  const handleSudmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/todo/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tarea, fecharealizacion, completado }),
      });
      const data = await res.json();
      setMessage("Actualizado Correctamente");
    } catch (err) {
      setMessage("Error Actualizar la Tarea");
      console.log(err)
    }
  }
  return (
    <div className="container">
    <h4 className="text-center py-4">Completar Tarea</h4>
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card" data-bs-theme="dark">
          <form onSubmit={handleSudmit} >
            <div className="card-header">
              <div className="mb-3">
                <label htmlFor="tarea" className="form-label">Tarea</label>
                <textarea className="form-control" value={tarea} placeholder="indique la tarea" id="tarea" rows="4" onChange={manejoTarea} readOnly ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha de Realización</label>
                <input type="date" className="form-control" value={fecharealizacion} placeholder="indique la fecha" id="fecha" rows="4" onChange={manejoFecha} required></input>
              </div>
            </div>
            <div className="card-footer text-center"> 
              <button type="submit" className="btn btn-outline-success">
                Completar
              </button>
              {message && (
                <div className="alert alert-info mt-3">{message}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Completado