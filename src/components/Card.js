import { Link } from 'react-router-dom';
import dummyImage from '../assets/dummyImage.jpg';
export const Card = ({ movie }) => {
  const { id, original_title, poster_path, overview } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : dummyImage;
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs m-3 dark:bg-gray-800 dark:text-white dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-lg" src={poster} alt="" />
      </Link>
      <Link to={`/movie/${id}`}>
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
          {original_title}
        </h5>
      </Link>
      <p classNameName="mb-6 text-body">{overview}</p>
      <Link
        to={`/movie/${id}`}
        className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 box-border border rounded-lg
               border-default-medium hover:bg-gradient-to-br hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 my-4 focus:outline-none"
      >
        Read more
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  );
};
