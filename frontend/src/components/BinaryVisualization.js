function BinaryVisualization({
  binaryA,
  binaryB,
  approxBinaryA,
  approxBinaryB
}) {
  return (
    <section className="card">

      <h2>Binary Visualization</h2>

      <table>
        <thead>
          <tr>
            <th>Value</th>
            <th>Exact Binary</th>
            <th>Approximate Binary</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>A</td>
            <td>{binaryA}</td>
            <td>{approxBinaryA}</td>
          </tr>

          <tr>
            <td>B</td>
            <td>{binaryB}</td>
            <td>{approxBinaryB}</td>
          </tr>
        </tbody>
      </table>

    </section>
  );
}

export default BinaryVisualization;
