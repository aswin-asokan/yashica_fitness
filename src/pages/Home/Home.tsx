//import React from 'react';
import Hero from '../../components/Hero/Hero';
import Packages from '../../components/Packages/Packages';
import Approach from '../../components/Approach/Approach';
import TrainerProfile from '../../components/TrainerProfile/TrainerProfile';
import MealPlan from '../../components/MealPlan/MealPlan';
import ReadyForResults from '../../components/ReadyForResults/ReadyForResults';
import Testimonials from '../../components/Testimonials/Testimonials';
import MailMe from '../../components/MailMe/MailMe';
import Questions from '../../components/Questions/Questions';

const Home = () => {
  return (
    <div>
      <Hero />
      <Packages />
      <Approach />
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