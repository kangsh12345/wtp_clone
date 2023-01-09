import styled from '@emotion/styled';

import Footer from '../components/Footer';
import Header from '../components/Header';
import AiringTodayTvSection from '../features/tv/airingToday';
import LatestTvSection from '../features/tv/latest';
import OnTheAirTvSection from '../features/tv/onTheAir';
import PopularSection from '../features/tv/popular';
import TopRateSection from '../features/tv/topRate';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

export default function TvPage() {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <LatestTvSection />
          <AiringTodayTvSection />
          <OnTheAirTvSection />
          <PopularSection />
          <TopRateSection />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
