import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { topRatedApi } from '../../../apis/movieAPI';
import { ListResponse, MovieDetail } from '../../../types';

export default function useTopRateMovie() {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    'topRatedApi',
    topRatedApi,
  );
}
