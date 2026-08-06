function Features() {
  return (
    <section id="features" className="section">
      <div className="section-head">
        <h2>Features & benefits</h2>
        <p className="section-lead">
          Approximate computing is useful here because neural networks can
          usually tolerate small math errors, and multipliers are expensive on
          an FPGA.
        </p>
      </div>

      <div className="card-grid">
        <article className="card">
          <h3>Handwritten digit classification</h3>
          <p>
            The final system classifies MNIST digits. A compact MLP runs on the
            FPGA and predicts the digit from a 28x28 image.
          </p>
        </article>

        <article className="card">
          <h3>Approximate multipliers</h3>
          <p>
            Instead of only using exact signed INT8 multiplies, we also use
            approximate designs such as Vakili R1. That helps reduce LUT usage
            on the fabric.
          </p>
        </article>

        <article className="card">
          <h3>Accuracy stays usable</h3>
          <p>
            In simulation, the reduced MNIST MLP stayed within about 0.5% of the
            exact model for the approximate multipliers we focused on.
          </p>
        </article>

        <article className="card">
          <h3>PC to FPGA path</h3>
          <p>
            A host PC can load weights, send digit images, start inference, and
            read the results back from the board for testing and demos.
          </p>
        </article>

        <article className="card">
          <h3>Exact vs approximate comparison</h3>
          <p>
            We keep the same network and board setup for both builds, so the
            resource difference is mainly from the multiplier choice.
          </p>
        </article>

        <article className="card">
          <h3>Approximate feature results validated</h3>
          <p>
            Approximate feature results were validated on the test path:
            classification matched the exact-arithmetic path closely enough to
            confirm that resource savings do not sacrifice usable accuracy.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Features;
