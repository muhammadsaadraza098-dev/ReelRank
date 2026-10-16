import { Routes, Route } from 'react-router-dom';
import { MovieDetail, MovieList, Search, PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="/movie/now_playing" title="Home " />}
        ></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route>
        <Route
          path="movie/popular"
          element={<MovieList apiPath="movie/popular" title="Popular Movies" />}
        ></Route>
        <Route
          path="movie/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Movies" />}
        ></Route>
        <Route
          path="movie/upcoming"
          element={
            <MovieList apiPath="movie/upcoming" title="Upcoming Movies" />
          }
        ></Route>
        <Route
          path="search"
          element={<Search apiPath="search/movie" />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};
