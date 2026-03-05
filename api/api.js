const URL = "https://api-react-taller-production.up.railway.app";

const register = async (username, name, password) => {
  const response = await fetch(`${URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, name, password })
  });
  if (!response.ok) {
    throw new Error("Error al registrar");
  }
  const data = await response.json();
  return data;
}

const login = async (username, password) => {
  const response = await fetch(`${URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  // Si el servidor responde con error, lanzar excepción
  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }
  const data = await response.json();
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data;
}

const postLocal = async (name, type, priceRange , city, zone, address , hours , photos) =>{
    const response = await fetch(`${URL}/api/locals`,{
        method: "POST",
        headers:{"Content-Type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({name, type, priceRange , city, zone, address , hours , photos})
    });

    const data = await response.json();

    console.log("Informacion del Local Creado", data);

}

export{
    register,
    login,
    postLocal,
}