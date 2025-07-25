import Hero from "../../components/Hero/Hero";
import ProgramsPreview from "../../components/ProgramsPreview/ProgramsPreview";
import TrainerProfile from "../../components/TrainerProfile/TrainerProfile";
import MealPlan from "../../components/MealPlan/MealPlan";
import ReadyForResults from "../../components/ReadyForResults/ReadyForResults";
import Testimonials from "../../components/Testimonials/Testimonials";
import MailMe from "../../components/MailMe/MailMe";
import Questions from "../../components/Questions/Questions";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="greySection">
        <Hero />
        <ProgramsPreview />
        <hr />
      </div>
      <TrainerProfile />
      <MealPlan />
      <ReadyForResults />
      <Testimonials />
      <MailMe />
      <Questions />
    </div>
  );
};

export default Home;
