function Methods() {
  return (
    <section id="methods" className="section">
      <div className="section-head">
        <h2>Methods</h2>
        <p className="section-lead">
          Work was split across model selection, approximate arithmetic, FPGA
          HDL, and the PC / web interface.
        </p>
      </div>

      <ol className="methods-list">
        <li className="method-card">
          <span className="method-num">1</span>
          <div>
            <h3>Model selection</h3>
            <p>
              We looked at a few ML models and picked a reduced MNIST MLP for the
              final handwriting classifier because it fit the board better and
              still worked well with approximate multiplies.
            </p>
          </div>
        </li>

        <li className="method-card">
          <span className="method-num">2</span>
          <div>
            <h3>Approximate multiplier study</h3>
            <p>
              Exact INT8 multiplies were compared against approximate options
              like Vakili and mul8s_1L2H using software emulation (AdaPT) before
              committing to the hardware path.
            </p>
          </div>
        </li>

        <li className="method-card">
          <span className="method-num">3</span>
          <div>
            <h3>FPGA design</h3>
            <p>
              The network was implemented on the Nexys A7 with modular exact and
              approximate multiply paths, parallel MAC work, and on-chip memory
              for weights.
            </p>
          </div>
        </li>

        <li className="method-card">
          <span className="method-num">4</span>
          <div>
            <h3>Host interface</h3>
            <p>
              Front-end and back-end work with the team supports loading model
              parameters, sending digit images, starting inference, and reading
              results back. Early Artix-7 + ESP32 testing helped bring up the
              communication path. Approximate feature results were validated on
              the test path: classification matched the exact-arithmetic path
              closely enough to confirm that resource savings do not sacrifice
              usable accuracy.
            </p>
          </div>
        </li>

        <li className="method-card">
          <span className="method-num">5</span>
          <div>
            <h3>Hardware measurements</h3>
            <p>
              Exact and approximate builds were compared under similar
              constraints for resource use, timing, and classification accuracy.
            </p>
          </div>
        </li>
      </ol>

      <div className="card">
        <h3>Project objectives</h3>
        <ul>
          <li>
            Choose and prepare an ML model that can run on FPGA (handwriting
            classification).
          </li>
          <li>
            Use approximate arithmetic to cut logic usage while keeping error
            low enough for the model.
          </li>
          <li>
            Implement the design on the Nexys A7 and bring it up step by step.
          </li>
          <li>
            Build a PC-FPGA interface and simple front end so results can be
            shown clearly.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Methods;
