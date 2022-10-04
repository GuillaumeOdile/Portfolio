import WorkingCrab from "../components/WorkingCrab";

interface HomeProps {
  className?: string;
}

const Home = (props: HomeProps) => {
  return (
    <div className="flex flex-col  justify-center">
      <span className="flex flex-col p-4 text-gray-200 text-4xl font-thin pl-48">
        Guillaume Odile
      </span>
      <div className="text-gray-200 font-thin text-xl pl-80">Crab-attitude</div>
      <WorkingCrab />
    </div>
  );
};

export default Home;
