import { Card } from '../components';
import useSearchFetch from '../hooks/useSearchFetch';
import { useSearchParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('query');
  const { data: movies } = useSearchFetch(apiPath, queryTerm);

  useTitle(`Search - ${queryTerm}`);

  return (
    <main className="py-28">
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white ">
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result found for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
