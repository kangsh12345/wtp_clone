import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { detailApi } from '../../apis/movieAPI';
import { MovieDetail } from '../../types';

export default function useMovieDetail(query: string) {
  const queryFn = () => detailApi(query);

  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    ['movieDetail', query],
    queryFn,
  );
}
