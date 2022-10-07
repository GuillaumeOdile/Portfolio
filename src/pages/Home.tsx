import CareerPath from "../components/CareerPath";
import Profile from "../components/Profile";
import WorkingCrab from "../components/WorkingCrab";

interface HomeProps {
  className?: string;
}

const Home = (props: HomeProps) => {
  return (
    <div className="flex justify-center">
      <div className="absolute w-full h-full -z-10">
        <WorkingCrab />
      </div>
      <div className="flex flex-col items-center relative pt-16 max-w-xl">
        <Profile />
        <CareerPath />
      </div>
    </div>
  );
};

export default Home;
