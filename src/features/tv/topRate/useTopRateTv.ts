import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { topRatedApi } from '../../../apis/tvAPI';
import { ListResponse, TVDetail } from '../../../types';

export default function useTopRateTv() {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    'topRatedApi',
    topRatedApi,
  );
}
