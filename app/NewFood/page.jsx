"use client";
import { Navbar } from "../../components/Reutilizables";
import { useState } from "react";
import { postDish } from "../../api/api";

const NewFood = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [localId, setLocalId] = useState("");




    const handleSubmit = async (e) => {
        e.preventDefault();
        await postDish(name, category, price, description, city, localId);
        alert("Food created successfully!");
        window.location.reload()
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
                 <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr 
from-[#fde68a]
to-[#f59e0b] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75 dark:opacity-20"
        />
      </div>
                
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-orange-500 sm:text-5xl dark:text-white">
                        New Food
                    </h2>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm/6 font-semibold text-gray-900 dark:text-white">Food name</label>
                            <div className="mt-2.5">
                                <input type="text" onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm/6 font-semibold text-gray-900 dark:text-white">City</label>
                            <div className="mt-2.5">
                                <input type="text" onChange={(e) => setCity(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm/6 font-semibold text-gray-900 dark:text-white">Description</label>
                            <div className="mt-2.5">
                                <input type="text" onChange={(e) => setDescription(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm/6 font-semibold text-gray-900 dark:text-white">Price</label>
                            <div className="mt-2.5">
                                <input type="number" onChange={(e) => setPrice(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm/6 font-semibold text-gray-900 dark:text-white">Local ID</label>
                            <div className="mt-2.5">
                                <input type="number" onChange={(e) => setLocalId(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm/6 font-semibold text-gray-900 dark:text-white">Category</label>
                            <div className="mt-2.5">
                                <select onChange={(e) => setCategory(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:focus:outline-indigo-500">
                                    <option value="">Select category</option>
                                    <option value="ENTRADA">Appetizer</option>
                                    <option value="PRINCIPAL">Principal</option>
                                    <option value="POSTRE">Sweets</option>
                                    <option value="BEBIDA">Driks</option>
                                    <option value="OTROS">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <button onClick={handleSubmit}
                                className="block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">
                                Add Dish
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewFood;