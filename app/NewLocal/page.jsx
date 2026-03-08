"use client";
import { Navbar } from "../../components/Reutilizables";
import { useState } from "react";
import { postLocal } from "../../api/api";

const NewLocal = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [zone, setZone] = useState("");
    const [address, setAddress] = useState("");
    const [hours, setHours] = useState("");
    const [type, setType] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [photo, setPhoto] = useState("");
    const [photos, setPhotos] = useState([]);

    const handleAddPhoto = (e) => {
        e.preventDefault();
        if (photo) {
            setPhotos([...photos, photo]);
            setPhoto("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postLocal(name, type, priceRange, city, zone, address, hours, photos);
        alert("Local created successfully!");
        window.location.reload()
    };

  return (
  <div>
    <Navbar></Navbar>

    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 bg-gray-100 ">
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
          New local
        </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="Local name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Local name
            </label>
            <div className="mt-2.5">
              <input
                id="Local name"
                name="Local name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-700 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:bg-gray-700"
              />
            </div>
          </div>
          <div>
            <label htmlFor="City" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              City
            </label>
            <div className="mt-2.5">
              <input
                id="City"
                name="City"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-700 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:bg-gray-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Zone" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Zone
            </label>
            <div className="mt-2.5">
              <input
                id="Zone"
                name="Zone"
                type="text"
                onChange={(e) => setZone(e.target.value)}
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-700 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:bg-gray-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Address" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Address
            </label>
            <div className="mt-2.5">
              <input
                id="Address"
                name="Address"
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-700 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:bg-gray-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Hours" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Hours
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-bg-gray-800 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-bg-gray-700 dark:bg-white/5 dark:outline-white/10 dark:has-[input:focus-within]:bg-gray-700">
                <input
                id="hours"
                name="hours"
                type="text"
                onChange={(e) => setHours(e.target.value)}
                autoComplete="hours"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                />
              </div>
            </div>
            
          </div>
          <div>
            <label htmlFor="LocalType" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Type of local
            </label>
            <div className="mt-2.5">
              <select
                id="type"
                name="type"
                type="text"
                placeholder="Type"
                onChange={(e) => setType(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-700 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:bg-gray-700"
              >
                    <option value="" className="bg-gray-800 text-white" >All</option>
                    <option value="BAR" className="bg-gray-800 text-white" >Bar</option>
                    <option value="RESTAURANTE" className="bg-gray-800 text-white" >Restaurant</option>
                    <option value="CAFETERIA" className="bg-gray-800 text-white" >Cafe</option>
                    <option value="FOOD_TRUCK" className="bg-gray-800 text-white" >Food Truck</option>
                    <option value="OTROS" className="bg-gray-800 text-white" >Others</option>
              </select>

            </div>
          </div>
          <div>
            <label htmlFor="PriceRange" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Price Range
            </label>
            <div className="mt-2.5">
              <select
                id="priceRange"
                name="priceRange"
                type="text"
                placeholder="Price Range"
                onChange={(e) => setPriceRange(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:bg-orange-50"
              >
                <option value="" className="bg-gray-800 text-white" >All</option>
                <option value="ECONOMICO" className="bg-gray-800 text-white" >Economic</option>
                <option value="MEDIO" className="bg-gray-800 text-white" >Medium</option>
                <option value="ALTO" className="bg-gray-800 text-white" >High</option>
              </select>
            </div>
          </div>
        <div className="sm:col-span-2">
            <label htmlFor="photo" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
              Photo
            </label>
            <div className="mt-2.5">
              <input
                id="photo"
                name="photo"
                type="text"
                onChange={(e) => setPhoto(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-bg-gray-800 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:bg-gray-700"
              defaultValue={''}
              />

          </div>
        </div>
        <button
            onClick={handleAddPhoto}
            className="sm:col-span-2 block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus-visible:bg-gray-700"
          >
            Add Photo
          </button>
        <div className="sm:col-span-2">
          <button
            onClick={handleSubmit}
            className=" block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus-visible:bg-gray-700"
          >
            Add Local
          </button>
        </div>
        </div>
      </form>
    </div>
</div>
);
}
export default NewLocal;