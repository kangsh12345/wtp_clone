import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';
import PopularSection from '../features/movie/popular';
import TopRateSection from '../features/movie/topRate';
import UpcomingSection from '../features/movie/upcoming';

export default function MainPage() {
  return (
    <div>
      <Header />
      <LatestMovieSection />
      <NowPlayingSection />
      <PopularSection />
      <TopRateSection />
      <UpcomingSection />
      <Footer />
    </div>
  );
}
