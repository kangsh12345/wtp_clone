import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { latestApi } from '../../../apis/movieAPI';
import { MovieDetail } from '../../../types';

export default function useLatestMovie() {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    'latestMovie',
    latestApi,
  );
}
