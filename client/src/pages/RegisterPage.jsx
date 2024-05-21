import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import registerBg from "../assets/ciclismo.jpg"; // Importa la imagen de fondo

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between"
      style={{
        backgroundImage: `url(${registerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <Card>
          {registerErrors.map((error, i) => (
            <Message message={error} key={i} />
          ))}
          <h1 className="text-3xl font-bold">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              name="username"
              placeholder="Write your name"
              {...register("username")}
              autoFocus
            />
            {errors.username?.message && (
              <p className="text-red-500">{errors.username?.message}</p>
            )}

            <Label htmlFor="email">Email:</Label>
            <Input
              name="email"
              placeholder="youremail@domain.tld"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}

            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="********"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}

            <Label htmlFor="confirmPassword">Confirm Password:</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="********"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            )}
            <Button type="submit">Submit</Button>
          </form>
          <p>
            Already Have an Account?
            <Link className="text-sky-500" to="/login">
              Login
            </Link>
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

export default Register;

