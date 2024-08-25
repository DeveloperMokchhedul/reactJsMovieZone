import { useState } from "react"
import MoviesData from "./data.js"

function Movies() {
  const [movieList, setMovieList] = useState(MoviesData)
  const [byCategory, setByCategory]=useState(movieList)
  const uniqueCatagory = [...new Set(movieList.map(item => item.category))]

  const handleCategory = (catego)=>{
    const filterData = movieList.filter((item)=>item.category==catego)
    if (filterData) {
      setByCategory(filterData)
    }
  }

  const handleAllClick=()=>{
    setByCategory(movieList)
  }
 
  
  
  
  return (
    <>
    <div className="flex gap-5 justify-center my-5">
      <button onClick={handleAllClick} className="bg-black text-white px-3 rounded-lg transition duration-300 ease-in-out hover:scale-110">All</button>
      {
        uniqueCatagory.map((item, index)=>(
          <div key={index} className=" rounded-lg justify-center items-center">
            <button className="bg-black text-white px-3 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={()=>handleCategory(item)}>{item}</button>
          </div>
        ))
      }
    </div>
      <div className="container mx-auto grid grid-cols-12 gap-10 p-5">
        {
          byCategory.map((item) => (
            <div key={item.id} className="col-span-3">
              <img className="rounded-3xl border border-black transition duration-300 ease-in-out hover:scale-110" src={item.poster_path} alt="" />
              <h1 className="text-[20px] text-center">{item.title}</h1>
              <p className="text-center">{item.release_date}</p>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Movies
