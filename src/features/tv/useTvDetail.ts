import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { detailApi } from '../../apis/tvAPI';
import { TVDetail } from '../../types';

export default function useTvDetail(query: string) {
  const queryFn = () => detailApi(query);

  return useQuery<AxiosResponse<TVDetail>, AxiosError>(
    ['tvDetail', query],
    queryFn,
  );
}
