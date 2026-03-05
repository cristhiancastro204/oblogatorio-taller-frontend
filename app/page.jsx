"use client";

import {useState} from "react";
import { login } from "../api/api";
import { useRouter } from "next/navigation";


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const data = await login(username, password);
    
    // Verificar si el login fue exitoso
    if (data.token) {
      router.push("/Principal/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
    
  } catch (error) {
    alert("Error al iniciar sesión");
    console.error(error);
  }
}

  const handleSubmit2 = async (e) => {
  e.preventDefault();
  router.push("/Register/");
    //ver si tenemos que redirigir a otra pagina o mostrar un mensaje de error
  }


  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold text-white">
          Login your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-100">
              Username
            </label>
            <div className="mt-2">
              <input
                id="Username"
                name="Username"
                type="text"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Sign In
            </button>
            <br></br>
            
          </div>

        </form>
        <button
              type="button"
              onClick={handleSubmit2}
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Sign Up
            </button>
      </div>
    </div>
  );
}
