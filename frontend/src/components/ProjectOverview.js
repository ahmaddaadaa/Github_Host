function ProjectOverview() {
  return (
    <section id="overview" className="section section-alt">
      <div className="section-head">
        <h2>Project overview</h2>
        <p className="section-lead">
          This project checks whether approximate arithmetic can lower FPGA
          resource use for ML inference without ruining accuracy on handwritten
          digit classification.
        </p>
      </div>

      <div className="card-grid two-col">
        <article className="card">
          <h3>Problem</h3>
          <p>
            ML models can be expensive in compute and energy. Exact multipliers
            take a lot of FPGA area and can hurt timing. Building a full custom
            AI ASIC is not realistic for undergrad work, so we used FPGAs as a
            practical stand-in for accelerator design.
          </p>
        </article>

        <article className="card">
          <h3>Solution</h3>
          <p>
            We implemented a handwriting classifier on a Digilent Nexys A7. The
            model is a reduced MNIST MLP that can run with exact or approximate
            multiplies. A PC host interface is used to load parameters and run
            inference for evaluation and demos.
          </p>
        </article>

        <article className="card">
          <h3>Why handwriting / MNIST?</h3>
          <p>
            We compared a few model options based on complexity and how useful
            they would be for studying approximate multiplies. The reduced MNIST
            MLP looked like the best fit for FPGA work. Larger CNNs were more
            sensitive to approximation unless we did a lot of retraining.
          </p>
        </article>

        <article className="card">
          <h3>What we delivered</h3>
          <ul>
            <li>Handwriting digit classifier on FPGA (MNIST MLP)</li>
            <li>Exact and approximate multiplier versions for comparison</li>
            <li>PC host tools for loading the model and running tests</li>
            <li>Demo videos of the working system</li>
          </ul>
          <p className="note">
            Approximate feature results were validated on the test path:
            classification matched the exact-arithmetic path closely enough to
            confirm that resource savings do not sacrifice usable accuracy. Early
            Artix-7 + ESP32 work was used for communication and feature testing;
            the final product is the handwriting classifier on the Nexys A7.
          </p>
        </article>
      </div>

      <div className="card metrics-card">
        <h3>Simulation accuracy (AdaPT tests)</h3>
        <p className="section-lead tight">
          These early software results helped us pick the reduced MNIST model.
          Approximate versions stayed close to the exact baseline.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Test</th>
                <th>Accurate</th>
                <th>Vakili</th>
                <th>mul8s_1L2H</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MNIST MLP (full)</td>
                <td>97.6%</td>
                <td>92.9%</td>
                <td>97.4%</td>
              </tr>
              <tr>
                <td>MNIST MLP (reduced + retrain)</td>
                <td>95.6%</td>
                <td>95.2%</td>
                <td>95.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;
