import { IoMenu } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { IoFastFoodSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const Sidebar = () => {
    return (
       
<div className="p-3 " >
  <Link to={"/"} className="text-center ">
  <div className="p-1 ">
    <img src={logo} alt="" width={140} className="img-fluid"/>
  </div>
  </Link>

  <ul className="list-unstyled ps-0 mt-3">
    <Link to={"/dashboard"} href="#" className="btn btn-danger btn-sm d-inline-flex align-items-center w-100"> <MdDashboard className="me-2" />Dashboard</Link>

    <li className="my-2">
      <button className="btn  btn-info btn-sm text-start w-100"  data-bs-toggle="collapse" data-bs-target="#home-collapse" >
      <IoMenu className="me-2" />
        DummyJson
      </button>
      <div className="collapse show" id="home-collapse">
        <ul className="btn list-unstyled fw-normal pb-4 small ">
            
            <li><Link to={"/productos"} href="#" className="link-body-emphasis d-flex align-items-center text-decoration-none ">
                <AiFillProduct className="me-2" />Productos</Link>
            </li>
            <li><Link to={"/ordenes"} href="#" className="link-body-emphasis d-flex align-items-center text-decoration-none ">
                <FaShoppingCart className="me-2" />Ordenes</Link>
            </li>
            <li><Link to={"/recetas"} href="#" className="link-body-emphasis d-flex align-items-center text-decoration-none ">
                <IoFastFoodSharp className="me-2" />Recetas</Link>
            </li>
    
            </ul>
      </div>
    </li>
    <li className="my-2">
      <button className="btn  btn-info btn-sm text-start w-100"  data-bs-toggle="collapse" data-bs-target="#todos-collapse" >
      <IoMenu className="me-2" />
       Todos
      </button>
      <div className="collapse show" id="todos-collapse">
        <ul className="btn list-unstyled fw-normal pb-4 small ">
            <li><Link to={"/todos"} href="#" className="link-body-emphasis d-flex align-items-center text-decoration-none "> 
                <LuListTodo className="me-2" />Ver Todo</Link>
            </li>
            <li><Link to={"/creartodo"} href="#" className="link-body-emphasis d-flex align-items-center text-decoration-none ">
                <AiFillProduct className="me-2" />Crear Todo</Link>
            </li>
            
            </ul>
      </div>
    </li>

    <li className="my-2">
      <button className="btn  btn-info btn-sm text-start w-100"  data-bs-toggle="collapse" data-bs-target="#users-collapse" >
      <IoMenu className="me-2" />
       Usuarios
      </button>
      <div className="collapse show" id="users-collapse">
        <ul className="btn list-unstyled fw-normal pb-4 small ">
            <li><Link to={"/usuarios"} href="#" className="link-body-emphasis d-flex align-items-center text-decoration-none "> 
                <LuListTodo className="me-2" />Ver Todos</Link>
            </li>
            <li><Link to={"/crearusuarios"} href="#" className="link-body-emphasis d-flex align-items-center text-decoration-none ">
                <AiFillProduct className="me-2" />Crear Usuario</Link>
            </li>
            
            </ul>
      </div>
    </li>
    <li className="mb-1">
      <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
        Orders
      </button>
      <div className="collapse" id="orders-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
          <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
          <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
          <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
        </ul>
      </div>
    </li>
    <li className="border-top my-3" />
    <li className="mb-1">
      <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
        Account
      </button>
      <div className="collapse" id="account-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
          <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
          <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
          <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
        </ul>
      </div>
    </li>
  </ul>
</div>








    )
}

export default Sidebar