import styled from '@emotion/styled';

import useLatestMovie from './useLatestMovie';

export default function LatestMovieSection() {
  const { data, isLoading } = useLatestMovie();

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading ? <div>Loading...</div> : <div>{data?.data.title}</div>}
    </Base>
  );
}

const Base = styled.div``;

const Title = styled.h4``;
