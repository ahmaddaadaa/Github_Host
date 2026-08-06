// demo clips for the final handwriting classifier
const demos = [
  {
    title: "Demo 1",
    description: "Handwriting classifier running on the FPGA setup.",
    file: "20260730-0539-24.5970634.mp4",
  },
  {
    title: "Demo 2",
    description: "Another look at inference on the delivered system.",
    file: "20260730-0541-22.7446763.mp4",
  },
  {
    title: "Demo 3",
    description: "End-to-end demo of the handwriting classification path.",
    file: "20260730-0545-34.8713945.mp4",
  },
];

function Demos() {
  const base = process.env.PUBLIC_URL + "/videos/";

  return (
    <section id="demos" className="section section-alt">
      <div className="section-head">
        <h2>Demo videos</h2>
        <p className="section-lead">
          Short clips of the final handwriting classifier on hardware.
        </p>
      </div>

      <div className="demo-grid">
        {demos.map((demo) => (
          <article key={demo.file} className="card demo-card">
            <h3>{demo.title}</h3>
            <p>{demo.description}</p>
            <video className="demo-video" controls preload="metadata" playsInline>
              <source src={base + demo.file} type="video/mp4" />
              Sorry, your browser cannot play this video.
            </video>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Demos;
