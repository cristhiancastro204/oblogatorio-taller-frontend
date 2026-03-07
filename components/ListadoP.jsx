"use client";
import {useState, useEffect} from "react";
import {getLocals, getDishes} from "../api/api" ////import para hacer el get locals
import Link from "next/link";
import Filtros from "../components/Filtros";

const PER_PAGE = 8;

const Principal = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [locals, setLocals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [query, setQuery] = useState("");
    const [type, setType] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [rating, setRating] = useState("");
    const [city, setCity] = useState("");
    const [zone, setZone] = useState("");

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem("user"));
        setUser(u);
        const t = localStorage.getItem("token");
        setToken(t);
    }, [])

    useEffect(() => {
    const fetchLocals = async () => {
        const data = await getLocals({ query, type, priceRange, rating, city, zone });
        setLocals(data.items);
    };
    fetchLocals();
    setCurrentPage(1);
}, [query, type, priceRange, rating, city, zone]);

    // Calculos de paginación
    const totalPages = Math.ceil(locals.length / PER_PAGE);
    const start = (currentPage - 1) * PER_PAGE;
    const currentLocals = locals.slice(start, start + PER_PAGE);

    // Estados filtros platos
    const [dishes, setDishes] = useState([]);
    const [dishPage, setDishPage] = useState(1);
    const [dishCategory, setDishCategory] = useState("");
    const [dishDateFrom, setDishDateFrom] = useState("");
    const [dishDateTo, setDishDateTo] = useState("");
    const [dishCity, setDishCity] = useState("");
    const [dishLocal, setDishLocal] = useState("");

    // Lógica paginación platos
    const totalDishPages = Math.ceil(dishes.length / PER_PAGE);
    const dishStart = (dishPage - 1) * PER_PAGE;
    const currentDishes = dishes.slice(dishStart, dishStart + PER_PAGE);

    // useEffect para traer platos
    useEffect(() => {
    const fetchDishes = async () => {
        let resolvedLocalId = "";

        if (dishLocal) {
            const allLocals = await getLocals();
            const found = allLocals.items.find(l =>
                l.name.toLowerCase().includes(dishLocal.toLowerCase())
            );
            if (!found) {
                setDishes([]);
                setDishPage(1);
                return;
            }
            resolvedLocalId = found.id;
        }

        const data = await getDishes({
            category: dishCategory,
            dateFrom: dishDateFrom,
            dateTo: dishDateTo,
            city: dishCity,
            localId: resolvedLocalId,
        });
        setDishes(data.items ?? []);
    };
    fetchDishes();
    setDishPage(1);
}, [dishCategory, dishDateFrom, dishDateTo, dishCity, dishLocal]);

    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Locales</h2>
                    <Filtros setQuery={setQuery} setType={setType} setPriceRange={setPriceRange} setRating={setRating} setCity={setCity} setZone={setZone} />

                    {/* GRID */}
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {currentLocals.map((local) => (
                            <div key={local.id} className="group relative">
                                <img
                                    alt={local.name}
                                    src={local.photos}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link href={"/"}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {local.name}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{local.type}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{local.city}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAGINACIÓN */}
                    <div className="flex items-center justify-center gap-2 mt-12">
                        <button
                            onClick={() => setCurrentPage(p => p - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 text-sm font-medium hover:bg-orange-500 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            ← Anterior
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                            <button
                                key={p}
                                onClick={() => setCurrentPage(p)}
                                className={`w-9 h-9 rounded-md text-sm font-medium transition
                                    ${p === currentPage
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-orange-400 hover:text-white'}`}
                            >
                                {p}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(p => p + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 text-sm font-medium hover:bg-orange-500 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            Siguiente →
                        </button>
                    </div>

                    {/* INFO */}
                    <p className="text-center text-gray-400 text-sm mt-3">
                        Mostrando {start + 1}–{Math.min(start + PER_PAGE, locals.length)} de {locals.length} locales
                    </p>

                </div>
            </div>
            <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Platos</h2>

                {/* FILTROS PLATOS */}
                <div className="flex flex-row flex-wrap items-center justify-center gap-3 my-4">
                    <input
                        type="text"
                        placeholder="Categoría (entrada, postre...)"
                        onChange={(e) => setDishCategory(e.target.value)}
                        className="rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 w-52"
                    />
                    <input
                        type="date"
                        placeholder="Desde"
                        onChange={(e) => setDishDateFrom(e.target.value)}
                        className="rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 w-44"
                    />
                    <input
                        type="date"
                        placeholder="Hasta"
                        onChange={(e) => setDishDateTo(e.target.value)}
                        className="rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 w-44"
                    />
                    <input
                        type="text"
                        placeholder="Zona / Ciudad"
                        onChange={(e) => setDishCity(e.target.value)}
                        className="rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 w-44"
                    />
                    <input
                        type="text"
                        placeholder="Local gastronómico"
                        onChange={(e) => setDishLocal(e.target.value)}
                        className="rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 w-48"
                    />
                </div>

                {/* GRID PLATOS */}
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {currentDishes.map((dish) => (
                        <div key={dish.id} className="group relative">
                            <img
                                alt={dish.name}
                                src={dish.photos}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link href={"/"}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {dish.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{dish.category}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{dish.city}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINACIÓN PLATOS */}
                <div className="flex items-center justify-center gap-2 mt-12">
                    <button
                        onClick={() => setDishPage(p => p - 1)}
                        disabled={dishPage === 1}
                        className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 text-sm font-medium hover:bg-orange-500 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        ← Anterior
                    </button>

                    {Array.from({ length: totalDishPages }, (_, i) => i + 1).map(p => (
                        <button
                            key={p}
                            onClick={() => setDishPage(p)}
                            className={`w-9 h-9 rounded-md text-sm font-medium transition
                                ${p === dishPage
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-orange-400 hover:text-white'}`}
                        >
                            {p}
                        </button>
                    ))}

                    <button
                        onClick={() => setDishPage(p => p + 1)}
                        disabled={dishPage === totalDishPages}
                        className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 text-sm font-medium hover:bg-orange-500 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        Siguiente →
                    </button>
                </div>

                {/* INFO PLATOS */}
                <p className="text-center text-gray-400 text-sm mt-3">
                    Mostrando {dishStart + 1}–{Math.min(dishStart + PER_PAGE, dishes.length)} de {dishes.length} platos
                </p>
            </div>
        </div>
        </div>
    );
}

export default Principal;