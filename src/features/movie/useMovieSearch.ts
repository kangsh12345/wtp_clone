import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { searchApi } from '../../apis/movieAPI';
import { ListResponse, Movie } from '../../types';

export default function useMovieSearch(query: string) {
  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(
    ['searchMovie', query],
    () => searchApi(query),
    { enabled: Boolean(query) },
  );
}
