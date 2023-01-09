import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { onTheAirApi } from '../../../apis/tvAPI';
import { ListResponse, TVDetail } from '../../../types';

export default function useOnTheAirTv() {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    'onTheAirApi',
    onTheAirApi,
  );
}
