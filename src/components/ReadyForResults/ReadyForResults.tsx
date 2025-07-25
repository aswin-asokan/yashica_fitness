import "./ReadyForResults.css";

const ReadyForResults = () => {
  const text = "READY FOR RESULTS? \u00A0\u00A0\u00A0"; // includes non-breaking spaces

  return (
    <section className="results-marquee-section">
      <div
        className="results-marquee"
        data-text={text.repeat(20)} // duplicate for seamless scroll
      >
        <span>{text.repeat(20)}</span>
      </div>
    </section>
  );
};

export default ReadyForResults;
