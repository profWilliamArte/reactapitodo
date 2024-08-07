import { useState } from "react";

const Crearusuarios = () => {
    const [message, setMessage] = useState("");

    const [usuario, setUsuario] = useState({
        firstName: '',
        lastName: '',
        maidenName: '',
        age: 0,
        gender: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        birthDate: '',
        role: '',
        address: ''
    });

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ usuario }),
            });
            const data = await res.json();
            setMessage(`El Usuario (${usuario.firstName}) se agregó correctamente`);
            console.log(data);
            // Restablecer el estado de usuario a su estado inicial
            setUsuario({
                firstName: '',
                lastName: '',
                maidenName: '',
                age: 0,
                gender: '',
                email: '',
                phone: '',
                username: '',
                password: '',
                birthDate: '',
                role: '',
                address: ''
            });
        } catch (err) {
            setMessage("Error al crear el Usuario");
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h4 className="text-center py-4">Crear un nuevo Usuario</h4>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card" data-bs-theme="dark">
                        <form onSubmit={handleSubmit}>
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName" className="form-label">Nombre</label>
                                        <input type="text" required className="form-control" id="firstName" name="firstName" placeholder="Indique el nombre" value={usuario.firstName} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName" className="form-label">Apellido</label>
                                        <input type="text" required className="form-control" id="lastName" name="lastName" placeholder="Indique el Apellido" value={usuario.lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="age" className="form-label">Edad</label>
                                        <input type="number" required className="form-control" id="age" name="age" placeholder="Indique la Edad" value={usuario.age} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="gender" className="form-label">Género</label>
                                        <select className="form-select" id="gender" required name="gender" aria-label="Seleccione género" value={usuario.gender} onChange={handleChange}>
                                            <option value=''>Seleccione una opción</option>
                                            <option value={'female'}>Femenino</option>
                                            <option value={'male'}>Masculino</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="form-label">Correo</label>
                                        <input type="email" className="form-control" required id="email" name="email" placeholder="Indique el Correo" value={usuario.email} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="phone" className="form-label">Teléfono</label>
                                        <input type="text" required className="form-control" id="phone" name="phone" placeholder="Indique el Telefono" value={usuario.phone} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="username" className="form-label">User Name</label>
                                        <input type="text" required className="form-control" id="username" name="username" placeholder="Indique el User Name" value={usuario.username} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="password" className="form-label">Clave</label>
                                        <input type="password" required className="form-control" id="password" name="password" placeholder="Indique la Clave" value={usuario.password} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="birthDate" className="form-label">Fecha de Nacimiento</label>
                                        <input type="date" required className="form-control" id="birthDate" name="birthDate" placeholder="Indique la fecha de nacimiento" value={usuario.birthDate} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="role" className="form-label">Rol</label>
                                        <select className="form-select"  required id="role" name="role" aria-label="Seleccione Rol" value={usuario.role} onChange={handleChange}>
                                            <option value=''>Seleccione una opción</option>
                                            <option value={'admin'}>Administrador</option>
                                            <option value={'operator'}>Operador</option>
                                            <option value={'user'}>Usuario</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Dirección</label>
                                    <textarea className="form-control" required placeholder="Indique la dirección" id="address" name="address" rows="3" value={usuario.address} onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-outline-success">Crear</button>
                                {message && (
                                    <div className="alert alert-info mt-3">{message}</div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crearusuarios;
