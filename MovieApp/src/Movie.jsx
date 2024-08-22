import { useState } from "react";

const API_KEY = '198dfefb8c63c5bec9e8fce101aabef4';

const Movie = () => {

    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [movieInfo, setMovieInfo] = useState(null);
    const [error, setError] = useState('');

    const searchMovie = async () => {
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`;

        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`Error in network: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setMovies(data.results);
                setError('');
            } else {
                setMovies([]);
                setError('No results found');
            }
        } catch (error) {
            setError('Error fetching the movie details');
            console.error('Error:', error);
        }
    };

    const fetchMoreInfo = async (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error in network: ${response.status} ${response.statusText}`);
            }
            const movie = await response.json();
            setMovieInfo(movie);
            setError('');
        } catch (error) {
            setError('Error fetching movie details! Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Movie Search</h1>
        <div className="flex w-full max-w-lg space-x-3">
            <input
                className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a movie title"
            />
            <button
                onClick={searchMovie}
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Search
            </button>
        </div>
            <div id="movie-details" className="w-full max-w-4xl mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {error && <p className="col-span-full text-center text-red-500">{error}</p>}
                {movies.map((movie) => (
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4 transition-all duration-300 hover:shadow-xl" key={movie.id}>
                        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                        <img
                            className="w-full h-64 object-cover rounded-lg mb-4"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <p className="mb-4"><strong>Release Date:</strong> {movie.release_date}</p>
                        <button
                            onClick={() => fetchMoreInfo(movie.id)}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            More Info
                        </button>
                    </div>
                ))}
            </div>

            {movieInfo && (
                <div id="movieModal" className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-6 z-50">
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-3xl font-bold mb-4">{movieInfo.title}</h2>
                        <img
                            className="w-full h-64 object-cover rounded-lg mb-4"
                            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                            alt={movieInfo.title}
                        />
                        <p className="mb-4"><strong>Release Date:</strong> {movieInfo.release_date}</p>
                        <p className="mb-4"><strong>Overview:</strong> {movieInfo.overview}</p>
                        <p className="mb-4"><strong>Director:</strong> {movieInfo.credits.crew.find((crew) => crew.job === 'Director').name}</p>
                        <p className="mb-4"><strong>Actors:</strong> {movieInfo.credits.cast.slice(0, 5).map((actor) => actor.name).join(', ')}</p>
                        <button
                            onClick={() => setMovieInfo(null)}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all mt-4 shadow-md hover:shadow-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Movie;
