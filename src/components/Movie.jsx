import React from 'react'


const Movie = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {


  return (
    <div class="mt-5 flex justify-center min-w-max hover:opacity-50">
  <div class="rounded-lg shadow-lg bg-white max-w-xs">
    <a href="#!">
      <img className="rounded-t-lg min-w-full" src={Poster} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{Title}</h5>
      <p class="text-gray-700 text-base mb-4">
        {Year}
      </p>
      <span>{Type}</span>
     
    </div>
  </div>
</div>
  )
}

export default Movie;