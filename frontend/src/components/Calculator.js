import { useState } from "react";

import BinaryVisualization from "./BinaryVisualization";

import {
  truncate2LSB,
  toBinary8
} from "../utils/multiplierUtils";

function Calculator() {

  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const [exact, setExact] = useState(null);
  const [approx, setApprox] = useState(null);

  const [absError, setAbsError] = useState(null);
  const [relError, setRelError] = useState(null);

  const [binaryA, setBinaryA] = useState("");
  const [binaryB, setBinaryB] = useState("");

  const [approxBinaryA, setApproxBinaryA] =
    useState("");

  const [approxBinaryB, setApproxBinaryB] =
    useState("");

  function calculate() {

    const A = parseInt(a);
    const B = parseInt(b);

    if (isNaN(A) || isNaN(B)) {
      alert("Please enter valid numbers");
      return;
    }

    const exactResult = A * B;

    const approxA = truncate2LSB(A);
    const approxB = truncate2LSB(B);

    const approxResult =
      approxA * approxB;

    const error =
      Math.abs(
        exactResult - approxResult
      );

    const errorPercent =
      exactResult === 0
        ? 0
        : (
            (error / exactResult) *
            100
          ).toFixed(2);

    setExact(exactResult);
    setApprox(approxResult);

    setAbsError(error);
    setRelError(errorPercent);

    setBinaryA(toBinary8(A));
    setBinaryB(toBinary8(B));

    setApproxBinaryA(
      toBinary8(approxA)
    );

    setApproxBinaryB(
      toBinary8(approxB)
    );
  }

  return (
    <>
      <section className="card">

        <h2>
          Interactive Demonstration
        </h2>

        <input
          type="number"
          placeholder="Operand A"
          value={a}
          onChange={(e) =>
            setA(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Operand B"
          value={b}
          onChange={(e) =>
            setB(e.target.value)
          }
        />

        <button
          onClick={calculate}
        >
          Calculate
        </button>

      </section>

      <section className="card">

        <h2>Results</h2>

        <div className="results-grid">

          <div className="result-box">
            <h3>Exact</h3>
            <p>{exact ?? "--"}</p>
          </div>

          <div className="result-box">
            <h3>Approximate</h3>
            <p>{approx ?? "--"}</p>
          </div>

          <div className="result-box">
            <h3>Absolute Error</h3>
            <p>{absError ?? "--"}</p>
          </div>

          <div className="result-box">
            <h3>Relative Error</h3>
            <p>
              {relError !== null
                ? `${relError}%`
                : "--"}
            </p>
          </div>

        </div>

      </section>

      <BinaryVisualization
        binaryA={binaryA}
        binaryB={binaryB}
        approxBinaryA={approxBinaryA}
        approxBinaryB={approxBinaryB}
      />
    </>
  );
}

export default Calculator;
