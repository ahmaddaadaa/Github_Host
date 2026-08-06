function Intro() {
  return (
    <section id="intro" className="hero">
      <p className="eyebrow">ECE 499 · Group 3 · University of Victoria</p>
      <h1>FPGA ML Inference Engine Using Approximate Computing</h1>
      <p className="lead">
        Our capstone project is an FPGA-based machine learning accelerator for
        handwritten digit classification. We use approximate arithmetic so the
        design can use fewer FPGA resources, while still keeping accuracy close
        to an exact integer baseline.
      </p>
      <p className="meta">
        Supervisor: Dr. Mihai Sima · Main board: Digilent Nexys A7 (XC7A100T)
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#demos">
          Watch demos
        </a>
        <a className="btn btn-secondary" href="#overview">
          Project overview
        </a>
      </div>
    </section>
  );
}

export default Intro;
