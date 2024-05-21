import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import logo from "../assets/BiciAmigo.svg"; // Importa la imagen del logo

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-black my-3 py-3 px-6 rounded-lg flex justify-between items-center"> {/* Alineando elementos verticalmente */}
      <div>
        <Link to={isAuthenticated ? "/tasks" : "/"}>
          <img src={logo} alt="BiciAmigo" className="w-32 h-auto" /> {/* Tamaño de la imagen más grande */}
        </Link>
      </div>
      <div className="flex gap-x-2 items-center"> {/* Contenedor para los botones */}
        {isAuthenticated && (
          <>
            <span className="mr-2">Welcome {user.username}</span>
            <ButtonLink to="/add-task">Añadir Ruta</ButtonLink>
            <Link to="/" onClick={() => logout()} className="btn btn-red">Logout</Link>
          </>
        )}
        {!isAuthenticated && (
          <>
            <ButtonLink to="/login">Login</ButtonLink>
            <ButtonLink to="/register">Register</ButtonLink>
          </>
        )}
      </div>
    </nav>
  );
}
