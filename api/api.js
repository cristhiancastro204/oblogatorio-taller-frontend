const URL = "https://api-react-taller-production.up.railway.app";

const register = async (username, name, password) => {
  const response = await fetch(`${URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }, //buscar
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

///////////////////////////////////////////////////////
//////leo por id el usuario
////////////////////////////////////////////////////////

 export const getUser = async (id) => {

const response = await fetch (`${URL}/api/users/${id}`)
const data = await response.json();
return data;


}





///////////////////////////////////////////////////////
//////////////Ver locales, GET///////////////////////////
////////////////////////////////////////////////////////


const getLocals = async (filters = {}) => {
    const { query, type, priceRange, rating, city, zone } = filters;

    const params = new URLSearchParams();

    if (query)      params.append("q", query);
    if (type)       params.append("type", type);
    if (priceRange) params.append("priceRange", priceRange);
    if (rating)     params.append("rating", rating);
    if (city)       params.append("city", city);
    if (zone)       params.append("zone", zone);

    const data = await fetch(`${URL}/api/locals?${params.toString()}`).then(res => res.json());
    return data;
};


///////////////////////////////////////////////////////
//////////////Ver platos, GET///////////////////////////
////////////////////////////////////////////////////////

const getDishes = async (filters = {}) => {
    const { category, dateFrom, dateTo, city, zone, localId } = filters;

    const params = new URLSearchParams();

    if (category) params.append("category", category);
    if (dateFrom)  params.append("dateFrom", dateFrom);
    if (dateTo)    params.append("dateTo", dateTo);
    if (city)      params.append("city", city);
    if (zone)      params.append("zone", zone);
    if (localId)   params.append("localId", localId);

    const response = await fetch(`${URL}/api/dishes?${params.toString()}`);
    if (!response.ok) return { items: [] };
    const text = await response.text();
    if (!text) return { items: [] };
    return JSON.parse(text);
};

const postDish = async (name, category, price, description, city, localId, photos) => {
    const response = await fetch(`${URL}/api/dishes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ name, category, price, description, city, localId, photos })
    });
    const data = await response.json();
    console.log("Plato creado", data);
}

const getLocal = async (id) => {

    const response = await fetch(`${URL}/api/locals/${id}`);

    const data = await response.json();

    return data;
}

export{
    register,
    login,
    postLocal,
    getLocals, ///// me quede bugueada aca, importantisimo exportar, hoy aprendimos algo. 
    getDishes,
    postDish,
    getUser,
    getLocal,
}