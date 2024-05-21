import { Link } from "react-router-dom";
import portada from "../assets/Bici.jpg";

function HomePage() {
  return (
    <section
      className="bg-red-500 flex justify-center items-center"
      style={{ 
        backgroundImage: `url(${portada})`, 
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        position: 'relative', 
      }}
    >
      <header className="bg-zinc-800 p-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
        <h1 className="text-5xl py-2 font-bold text-white">BiciAmigo</h1>
        <p className="text-md text-slate-400 text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          fugit doloremque molestias recusandae labore repellat amet dicta tempore
          necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
          quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
          ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
          officia accusantium vitae doloremque, molestias modi.
        </p>

        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          Get Started
        </Link>
      </header>
      
      {/* Pie de página */}
      <footer className="absolute bottom-0 w-full text-center py-4 text-white" style={{ backgroundColor: '#000000' }}>
        © {new Date().getFullYear()} BiciAmigo. Todos los derechos reservados.
      </footer>
    </section>
  );
}

export default HomePage;