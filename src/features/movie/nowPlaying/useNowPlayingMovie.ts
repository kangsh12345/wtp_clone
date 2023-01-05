import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { nowPlayingApi } from '../../../apis/movieAPI';
import { ListResponse, MovieDetail } from '../../../types';

export default function useNowPlayingMovie() {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    'nowPlayingMovie',
    nowPlayingApi,
  );
}
