import './calculator.scss';
import type * as Rust from '../../native/pkg';
import { useState } from 'react';

export default function Calculator({ rust }: { rust: typeof Rust }) {
  const [answer, setAnswer] = useState<number>(0);

  return (
    <main className="calculator">
      <section className="screen">
        <span>{answer}</span>
      </section>
      <section className="buttons">
        <div>AC</div>
        <div>+/-</div>
        <div>%</div>
        <div>&divide;</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>x</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>-</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>+</div>
        <div className="zero">
          <span>0</span>
        </div>
        <div>.</div>
        <div>=</div>
      </section>
    </main>
  );
}
