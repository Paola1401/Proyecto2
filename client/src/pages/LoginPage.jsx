import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";
import inicioSbg from "../assets/ciclismo.jpg"; // Importa la imagen de fondo

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div
      className="h-[calc(100vh-100px)] flex flex-col items-center justify-between"
      style={{
        backgroundImage: `url(${inicioSbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <Card>
          {loginErrors.map((error, i) => (
            <Message message={error} key={i} />
          ))}
          <h1 className="text-2xl font-bold">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="email">Email:</Label>
            <Input
              label="Write your email"
              type="email"
              name="email"
              placeholder="youremail@domain.tld"
              {...register("email", { required: true })}
            />
            <p>{errors.email?.message}</p>

            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="Write your password"
              {...register("password", { required: true, minLength: 6 })}
            />
            <p>{errors.password?.message}</p>

            <Button>Login</Button>
          </form>

          <p className="flex gap-x-2 justify-between">
            Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
          </p>
        </Card>
      </div>
      {/* Pie de página */}
      <footer className="w-full text-center py-4 text-white" style={{ backgroundColor: '#000000' }}>
        © {new Date().getFullYear()} BiciAmigo. Todos los derechos reservados.
      </footer>
    </div>
  );
}
