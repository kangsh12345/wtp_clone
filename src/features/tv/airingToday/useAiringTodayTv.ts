import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { airingTodayApi } from '../../../apis/tvAPI';
import { ListResponse, TVDetail } from '../../../types';

export default function useAiringTodayTv() {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    'airingTodayApi',
    airingTodayApi,
  );
}
