import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { upcomingApi } from '../../../apis/movieAPI';
import { ListResponse, MovieDetail } from '../../../types';

export default function useUpcomingMovie() {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    'upcomingApi',
    upcomingApi,
  );
}
