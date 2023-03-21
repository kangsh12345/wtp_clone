import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { similarApi } from '../../apis/movieAPI';
import { ListResponse, MovieDetail } from '../../types';

export default function useSimilarMovie(id: string) {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    ['similarMovie', id],
    () => similarApi(id),
  );
}
