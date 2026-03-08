"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getUser } from "../api/api";
import Link from "next/link";
const PER_PAGE = 8;

export const ProfilePage = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [locals, setLocal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Cálculos de paginación
  const totalPages = Math.ceil(locals.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const currentLocals = locals.slice(start, start + PER_PAGE);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser(u);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(params.id);
      setUser(data.item);
      setLocal(data.item.locals);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 font-sans text-slate-900">
        <div className="max-w-2xl mx-auto px-6 py-12">

          {/* Profile Info */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                alt="User"
                className="w-32 h-32 rounded-full object-cover ring-4 ring-orange-50"
              />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{user.username}</h1>
            <p className="text-slate-500">{user.name}</p>
          </div>

          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Places {user?.name} visited:
            </h2>
          </div>

          {/* GRID */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {currentLocals.map((local) => (
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
                <Link href={`/ViewLocal/${local.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {local.name}
                </Link>
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
              ← back
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
              disabled={currentPage === totalPages || totalPages === 0}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 text-sm font-medium hover:bg-orange-500 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              next →
            </button>
          </div>

          {/* INFO */}
          {locals.length > 0 && (
            <p className="text-center text-gray-400 text-sm mt-3">
              showing {start + 1}–{Math.min(start + PER_PAGE, locals.length)} of {locals.length} locals
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;