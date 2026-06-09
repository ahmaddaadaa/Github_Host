function MathematicalModel() {
  return (
    <section className="card">

      <h2>How It Works</h2>

      <h3>Exact Multiplication</h3>

      <pre>
P = A × B
      </pre>

      <p>
        Computes the true multiplication result.
      </p>

      <h3>Approximate Multiplication</h3>

      <pre>
Aapprox = floor(A / 4) × 4

Bapprox = floor(B / 4) × 4
      </pre>

      <p>
        The two least significant bits are removed before
        multiplication.
      </p>

      <pre>
Papprox = Aapprox × Bapprox
      </pre>

      <h3>Error Calculation</h3>

      <pre>
Absolute Error = | Pexact - Papprox |
      </pre>

      <pre>
Relative Error (%) =
(Error / Pexact) × 100
      </pre>

    </section>
  );
}

export default MathematicalModel;
