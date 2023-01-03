import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestMovieSection from '../features/movie/latest';

export default function MainPage() {
  return (
    <div>
      <Header />
      <LatestMovieSection />
      <Footer />
    </div>
  );
}
