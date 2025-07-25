import "./TrainerProfile.css";

const TrainerProfile = () => {
  return (
    <section className="trainer-section">
      <div className="trainer-box">
        <h2 className="trainer-heading">THE APPROACH</h2>
        <p>I started my fitness journey at the age of 16,</p>
        <p>
          I had already been exercising and developing an understanding of body
          movement through my passion for dancing since the age of 10.
        </p>
        <p>
          As I progressed, I realized I needed to build strength to reach my
          full potential in the mastery of my body and my passions. The road
          wasn’t easy—I spent years learning, failing, and focusing on muscle
          gain and fat loss. But with each challenge, I gained more insight.
        </p>
        <p>
          Over the years, I’ve lost and rebuilt my body multiple times, whether
          it was for fat loss or muscle gain. After living this lifestyle for 8
          years it has given me a deep understanding of the process.
        </p>
        <p>
          I know that everyone’s journey is unique, which is why I create custom
          programs that align with your specific goals, preferences, and needs.
        </p>
        <p>
          I’ll guide you with the knowledge I’ve gained to help you save time,
          make the journey simpler, and achieve lasting results—faster and more
          effectively than if you were to navigate this path alone.
        </p>
        <div className="trainer-cta">
          <a href="/programs" className="trainer-link">
            START YOUR JOURNEY
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;
