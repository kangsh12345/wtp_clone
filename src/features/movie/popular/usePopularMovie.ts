import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { popularApi } from '../../../apis/movieAPI';
import { ListResponse, MovieDetail } from '../../../types';

export default function usePopularMovie() {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    'popularApi',
    popularApi,
  );
}
