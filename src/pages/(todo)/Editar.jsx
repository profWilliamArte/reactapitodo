import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editar = () => {
    const params = useParams()
    const [tarea, setTarea] = useState("")
    const [message, setMessage] = useState("");

    async function fetchData() {
      if (params.id) {
        const res = await fetch(`http://localhost:3000/api/todo/${params.id}`);
        const data = await res.json();
        setTarea(data.tarea);     
        }
      }
    useEffect(() => {
        fetchData();
    }, [params.id]);

    const handleSudmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/todo/${params.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({ tarea }),
        });
        const data = await res.json();
        setMessage(`La tarea (${tarea}) se Actualizo correctamente`);
        
        setTarea(data.tarea);
      } catch (err) {
        setMessage("Error al crear la tarea");
        console.log(err)
      }
    }
    const manejoTarea = (e) => {
        setTarea(e.target.value)
        //console.log(tarea)
      } 
  return (
    <div className="container">
    <h4 className="text-center py-4">Editar la Tarea numero {params.id}</h4>
    <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card" data-bs-theme="dark">
          <form onSubmit={handleSudmit} >
              <div className="card-header">
                <div className="mb-3">
                  <label htmlFor="tarea" className="form-label">Tarea</label>
                  <textarea className="form-control" value={tarea} placeholder="indique la tarea" id="tarea" rows="4" onChange={manejoTarea}  required></textarea>
                </div>
                  </div>
                <div className="card-footer text-center"> 
                  <button type="submit" className="btn btn-outline-success">Actualizar</button>
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

export default Editar