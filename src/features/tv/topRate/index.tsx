import styled from '@emotion/styled';

import Card from '../../../components/Card';
import SimpleSlider from '../../../components/SimpleSlider';
import useTopRateTv from './useTopRateTv';

export default function TopRateTvSection() {
  const { data, isLoading } = useTopRateTv();

  const getYear = (date: string) => date.split('-')[0];

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <SimpleSlider>
          {data?.data?.results.map(tv => (
            <Card
              linkUrl={`/tv/${tv.id}`}
              title={tv.name}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
              voteAverage={tv.vote_average}
              year={getYear(tv.first_air_date)}
            />
          ))}
        </SimpleSlider>
      )}
    </Base>
  );
}

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;
