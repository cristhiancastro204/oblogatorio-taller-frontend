"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {getUser} from "../api/api";




export const ProfilePage = () => {
const params = useParams();
const [user, setUser] = useState({});
const [locals, setLocal] = useState([]);

///guardar en el localStorage user
useEffect(() => {
  const u = JSON.parse(localStorage.getItem("user"));
  console.log(u);
  setUser(u);
}, []);


//por id
useEffect(() =>{
const fetchUser = async () => {
const data = await getUser(params.id);
console.log(data);
setUser(data.item);
setLocal(data.item.locals);
}
fetchUser();
}, [] )


  
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      <main className="max-w-2xl mx-auto px-6 py-12">

        {/* Profile Info */}
        <div className="flex flex-col items-center mb-12">

          <div className="relative mb-4">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              alt="User"
              className="w-32 h-32 rounded-full object-cover ring-4 ring-orange-50"
            />

            <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>

          </div>

          <h1 className="text-2xl font-bold text-slate-900">
           {user.username}
          </h1>

          <p className="text-slate-500">
            {user.name}
          </p>

        </div>

<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
    Places {user?.name} visited:
  </h2>

 
</div>

<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {locals.map((local) => (
            <div key={local.id} className="group relative">
              <img
                alt={local.photos}
                src={local.photos}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={local.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {local.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                   
                    Zone: {local.zone} <br /> Adress: {local.address} <br /> Hours: {local.hours}
                     </p>
                </div>
                <p className="text-sm font-medium text-gray-900">{local.price}</p>
              </div>
            </div>
          ))}
        </div>







      </main>
    </div>






  );
};

export default ProfilePage;