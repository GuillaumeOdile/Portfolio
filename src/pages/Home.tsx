import CareerPath from "../components/CareerPath";
import FavoriteStack from "../components/FavoriteStack";
import MyArticles from "../components/MyArticles";
import Profile from "../components/Profile";
import WorkingCrab from "../components/WorkingCrab";

interface HomeProps {
  className?: string;
}

const Home = (props: HomeProps) => {
  return (
    <div className="flex justify-center">
      <div className="fixed w-full h-full -z-10 bg-scroll">
        <WorkingCrab />
      </div>
      <div className="flex flex-col items-center relative py-16 space-y-16 max-w-xl">
        <Profile />
        <CareerPath />
        <MyArticles />
        <FavoriteStack />
      </div>
    </div>
  );
};

export default Home;
