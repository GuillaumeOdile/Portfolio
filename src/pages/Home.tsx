import Profile from "../components/Profile";
import WorkingCrab from "../components/WorkingCrab";

interface HomeProps {
  className?: string;
}

const Home = (props: HomeProps) => {
  return (
    <div className="flex flex-col items-center w-full h-full -z-10">
      <Profile />
      <WorkingCrab />
    </div>
  );
};

export default Home;
