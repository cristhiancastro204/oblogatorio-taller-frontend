import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getLocal } from "../api/api";
import { FingerPrintIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Link from "next/link";
import { Navbar } from "./Reutilizables";
import { Rating } from "@material-tailwind/react";
import Rating2 from "./Rating2";

const DetallesL = () => {
  const [local, setLocal] = useState({});
  const [refresh, setRefresh] = useState(false);
  const params = useParams();

  const features = [
    { name: 'ID.', description: local.id, icon: FingerPrintIcon },
    { name: 'City.', description: local.city, icon: CloudArrowUpIcon },
    { name: 'Zone.', description: local.zone, icon: LockClosedIcon },
    { name: 'Address.', description: local.address, icon: ServerIcon },
  ];

  useEffect(() => {
    const fetchLocal = async () => {
      const data = await getLocal(params.id);
      setLocal(data.item);
    };
    fetchLocal();
  }, [refresh]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0e0e0e] text-[#e8e0d5]">
        <div className="mx-auto max-w-6xl px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — INFO */}
          <div className="flex flex-col pt-3">

            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-orange-500 bg-orange-500/10 border border-orange-500/25 px-3 py-1 rounded-full w-fit mb-5">
              <span>●</span> Local
            </span>

            <h1 className="text-5xl font-extrabold text-[#f5f0ea] leading-tight tracking-tight mb-5">
              {local.name}
            </h1>

            {local.description && (
              <p className="text-sm leading-relaxed text-[#9a9189] font-light mb-8">
                {local.description}
              </p>
            )}

            <div className="w-10 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded mb-8" />

            <dl className="flex flex-col mb-9">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center gap-4 py-3 border-b border-white/5 first:border-t first:border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    <feature.icon aria-hidden="true" className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-[13px] font-semibold text-[#c8bfb5] w-16">{feature.name}</span>
                  <span className="text-[13px] text-[#6b6460]">{feature.description}</span>
                </div>
              ))}
            </dl>

            <Link
              href={`/Profile/${local.creator?.id}`}
              className="inline-flex items-center gap-2 text-[13px] text-[#6b6460] hover:text-orange-500 transition-colors w-fit"
            >
              <span className="text-[11px] opacity-60">↗</span>
              {local.creator?.name}
            </Link>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] aspect-[4/3] ring-1 ring-white/[0.07]">
              <img
                alt="Product screenshot"
                src={local.photos ? local.photos[0] : "https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"}
                width={2432}
                height={1442}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-orange-500/20 rounded-2xl -z-10" />
          </div>

        </div>

        <Rating2 id={local.id} name={local.name} setRefresh={setRefresh} />

<div className="mx-auto max-w-6xl px-8 pb-20">
  <div className="mb-8">
    <div className="w-10 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded mb-4" />
    <h2 className="text-xs font-semibold tracking-widest uppercase text-[#6b6460]">Reseñas</h2>
  </div>

  <ul role="list" className="grid gap-4 sm:grid-cols-2">
    {local.reviews?.map((review) => (
      <li
        key={review.id}
        className="group rounded-xl bg-[#161616] border border-orange-500/20 hover:border-orange-500/40 transition-colors duration-200 px-5 py-4"
      >
        <div className="flex items-center gap-4">
          <img
            alt="imagen de usuario"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv_rUJ2Ru3GR0Jxy2YTNH_jrVzX3_HY-THQ&s"
            className="size-10 rounded-full ring-1 ring-orange-500/20 shrink-0"
          />
          <div className="flex flex-col gap-1">
            <Rating value={review.rating} readonly />
            <p className="text-sm text-[#9a9189]">{review.comment}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>
      </div>
    </>
  );
};

export default DetallesL;