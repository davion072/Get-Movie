
const MovieCard = ({ movie, open }) => {
    return (
        <>

            <div className="flex justify-center ">
                {movie.Response === "True"?
                    <div className="border-4 border-black">

                        <img src={movie.Poster} alt="" />
                        <div className="m-2">
                            <h3><strong>Title: </strong>{movie.Title}</h3>
                            <h3><strong>IMDB Rating: </strong>{movie.imdbRating}</h3>
                            <h3><strong>Genre: </strong>{movie.Genre}</h3>
                        </div>
                        <div className="flex justify-center ">
                            <button className='bg-blue-500 text-white rounded-3xl px-4 py-2 my-2' onClick={open}>Read Plot</button>
                        </div>
                    </div> :
                    <div className="text-6xl text-red-500">
                        Movie Not found
                    </div>
                }

            </div>

        </>
    )
}

export default MovieCard
