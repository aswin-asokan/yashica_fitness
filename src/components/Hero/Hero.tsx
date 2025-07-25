import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate("/programs");
  };

  return (
    <section className="hero-wrapper">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      />

      <div className="hero-content">
        <h1 className="hero-title">
          DON'T SETTLE FOR{" "}
          <i>
            <b>ORDINARY</b>
          </i>
          . YOU'RE ENGINEERED TO{" "}
          <i>
            <b>EXCEL</b>
          </i>
          .
        </h1>
        <button className="hero-button" onClick={handleStartJourney}>
          START YOUR JOURNEY
        </button>
      </div>
    </section>
  );
};

export default Hero;
