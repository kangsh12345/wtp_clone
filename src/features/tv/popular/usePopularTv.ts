import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { popularApi } from '../../../apis/tvAPI';
import { ListResponse, TVDetail } from '../../../types';

export default function usePopularTv() {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    'popularApi',
    popularApi,
  );
}
