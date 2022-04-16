
import Movie from './components/Movie';
import { useEffect, useState } from 'react'

function App() {
 
  const KEY = process.env.REACT_APP_API_KEY;
  
  const API = `https://www.omdbapi.com/?apikey=${KEY}&`;



  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('')

  const getData = async (input) => {
    const response = await fetch(`${API}&s=${input}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    getData('Avengers');

  }, [])

  
  return (
    <div className="bg-gray-900 h-full">
      <div>
        <h1 className='flex justify-center p-9 text-2xl text-slate-300 font-bold'>Welcome to Movie App</h1>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="flex border-2 rounded">
            <input value={input} type="text" className="px-4 py-2 w-80" placeholder="Avengers"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter'? (getData(input)):
              (console.log("not working"))} />
            <button className=" bg-white flex items-center justify-center px-4 border-l"
              onClick={() => getData(input)}>
              <svg className=" w-6 hover:w-7 h-7 bg-white text-sky-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>

            </button>
          </div>
        </div>
      </div>
      {
        movies?.length > 0 ? (
          <div className='ml-9 mt-9 md:grid grid-flow-row grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {movies.map((movie) => (
              <div className='ml-9 mt-9 md:grid grid-flow-row grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <div className='h-screen text-2xl flex justify-center text-white mt-24'>
            <h1>There is No Such Movie as {input}</h1>
           </div>
        )
      }


    </div>
  );
}

export default App;
