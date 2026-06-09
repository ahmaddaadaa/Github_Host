function ProjectOverview() {
  return (
    <section className="card">
      <h2>Project Overview</h2>

      <p>
        This project compares an exact 8-bit multiplier
        with a simplified approximate multiplier.

        The objective is to demonstrate how arithmetic
        approximations may reduce hardware complexity
        while introducing a small computational error.
      </p>

      <p>
        Approximate arithmetic is often investigated for
        FPGA-based AI accelerators because many machine
        learning applications can tolerate small numerical
        errors.
      </p>
    </section>
  );
}

export default ProjectOverview;
