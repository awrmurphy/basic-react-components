import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
export default function Home(){
  const appName = 'MovieCatalog';
  return(
    <div>
      <Navbar name={appName}/>
      <MovieCard/>
    </div>
  );
}