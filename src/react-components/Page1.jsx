import Gif from "../assets/ball_gif.gif"
import Search from "./Search";
const Page1 = () => {
  return (
    <div className="page1__section">
      <div className="page1__section--vid">
        <img alt="" src={Gif} className="h-screen w-screen"></img>
      </div>
      <form className="d-flex page__form" role="search">
        <Search />
      </form>
    </div>
  );
};

export default Page1;