import pageNotFound from '../assets/pageNotFound.jpg';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
export const PageNotFound = () => {
  useTitle('Page Not Found');

  return (
    <main className="py-28">
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-body font-bold text-center dark:text-white my-10">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img src={pageNotFound} alt="Page not found" className="rounded" />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 box-border border-gray-900 text-xl w-64 border-1 dark:border-white  my-4 hover:bg-gradient-to-br focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg  px-4 py-2.5 focus:outline-none"
            >
              Back to ReelRank
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
