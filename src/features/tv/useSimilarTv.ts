import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { similarApi } from '../../apis/tvAPI';
import { ListResponse, TVDetail } from '../../types';

export default function useSimilarTv(id: string) {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    ['similarTv', id],
    () => similarApi(id),
  );
}
