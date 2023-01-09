import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { latestApi } from '../../../apis/tvAPI';
import { TVDetail } from '../../../types';

export default function useLatestTv() {
  return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTv', latestApi);
}
