import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout2 from "./components/Layout2"
import Dashborad from "./pages/Dashborad"

import Error404 from "./pages/Error404"
import Theme from "./context/Theme"
import Productos from "./pages/(productos)/Productos"
import Ordenes from "./pages/Ordenes"

import Detalle from "./pages/(productos)/Detalle"
import Todo from "./pages/(todo)/Todo"
import CrearTodo from "./pages/(todo)/CrearTodo"
import Completado from "./pages/(todo)/Completado"
import Editar from "./pages/(todo)/Editar"
import Recetas from "./pages/Recetas"
import Usuarios from "./pages/(usuarios)/Usuarios"
import Crearusuarios from "./pages/(usuarios)/Crearusuarios"
import EditarUsers from "./pages/(usuarios)/EditarUsers"


const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout2 />} >
    
              <Route path="/dashboard" element={<Dashborad />} />

              <Route path="/todos" element={<Todo />} />
              <Route path="/creartodo" element={<CrearTodo />} />
              <Route path="/completado/:id" element={<Completado />} />
              <Route path="/editar/:id" element={<Editar />} />


              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/crearusuarios" element={<Crearusuarios />} />
              <Route path="/editaruser/:id" element={<EditarUsers />} />

              <Route path="/productos" element={<Productos />} />
              <Route path='/detalle/:id' element={<Detalle />} />

              <Route path="/ordenes" element={<Ordenes />} />
  
              <Route path="/recetas" element={<Recetas />} />

              <Route path="*" element={<Error404 />} />
        
          </Route>
        </Routes>
      </BrowserRouter>
   </Theme>
  )
}

export default App