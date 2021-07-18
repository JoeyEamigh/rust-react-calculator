/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, useRef } from 'react';
import './App.scss';
import type * as Rust from './native/pkg/index';
import Loading from './components/loading/loading';
import FourFunc from './components/fourFunc/fourFunc';
import { Dropdown } from 'bootstrap';
import { CalculatorType } from './types/calculatorType.enum';
import Triangle from './components/triangle/triangle';

function App() {
  const [rust, setRust] = useState<typeof Rust>(null);
  const dropdownRef = useRef<HTMLButtonElement>();
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(CalculatorType.FourFunc);

  useEffect(() => {
    new Dropdown(dropdownRef.current);
    import('./native/pkg/index').then((module) => setRust(module));
  }, []);

  return (
    <main className="rusty-calc">
      <h1>Rusty Calculator</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          ref={dropdownRef}
        >
          Mode: {calculatorType}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#" onClick={() => changeCalculatorType(CalculatorType.FourFunc)}>
              {CalculatorType.FourFunc}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={() => changeCalculatorType(CalculatorType.Triangle)}>
              {CalculatorType.Triangle}
            </a>
          </li>
        </ul>
      </div>
      {rust ? renderCalculator() : <Loading />}
    </main>
  );

  function renderCalculator() {
    switch (calculatorType) {
      case CalculatorType.FourFunc:
        return <FourFunc rust={rust} />;
      case CalculatorType.Triangle:
        return <Triangle rust={rust} />;
      default:
        return <FourFunc rust={rust} />;
    }
  }

  function changeCalculatorType(type: CalculatorType) {
    setCalculatorType(type);
  }
}

export default App;
