import "./Dashboard.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Movierow from "./Movierow";
function Dashboard() {
  return (
    <  >
      <Navbar />
      <Banner />
      <Movierow title="Trending Now"/>
      <Movierow title="Top 10 Movies"/>
      
    </>
  );
}

export default Dashboard; 




