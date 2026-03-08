const Filtros = ({setQuery , setType , setPriceRange , setRating , setCity , setZone}) => {

   ///filtros de locales 
    const inputClass = "rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 w-40"

    return( 
     <div className="flex flex-row flex-wrap items-center justify-center gap-3 my-4">
        <input
                id="query"
                name="Query"
                type="text"
                placeholder="Name"
                onChange={(e) => setQuery(e.target.value)}
                className={inputClass}
              />
            <input
                id="rating"
                name="rating"
                type="text"
                placeholder="Rating"
                onChange={(e) => setRating(e.target.value)}
                className={inputClass}
              />
            <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                className={inputClass}
              />
            <input
                id="zone"
                name="zone"
                type="text"
                placeholder="Zone"
                onChange={(e) => setZone(e.target.value)}
                className={inputClass}
              />
              <select
                id="type"
                name="type"
                onChange={(e) => setType(e.target.value)}
                className={inputClass}
              >
                <option value="">All</option>
                <option value="BAR">Bar</option>
                <option value="RESTAURANTE">Restaurant</option>
                <option value="CAFETERIA">Cafe</option>
                <option value="FOOD_TRUCK">Food Truck</option>
                <option value="OTROS">Others</option>
              </select>
             
            <select
                id="priceRange"
                name="priceRange"
                onChange={(e) => setPriceRange(e.target.value)}
                className={inputClass}
              >
                <option value="">All</option>
                <option value="ECONOMICO">Economic</option>
                <option value="MEDIO">Medium</option>
                <option value="ALTO">High</option>
              </select>
     </div>
    )
}

export default Filtros;