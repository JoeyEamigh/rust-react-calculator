import './fourFunc.scss';
import type * as Rust from '../../native/pkg';
import { useState } from 'react';
import { Operation } from '../../types/operations.enum';

export default function FourFunc({ rust }: { rust: typeof Rust }) {
  const [answer, setAnswer] = useState<number>(0);
  const [operation, setOperation] = useState<Operation>(null);
  const [prenum, setPrenum] = useState<number>(null);
  const [postnum, setPostnum] = useState<number>(null);
  const [buffer, setBuffer] = useState('');

  return (
    <main className="calculator">
      <section className="screen">
        <span className="buffer">{!!buffer ? buffer : answer}</span>
        <span className="operations">
          {prenum} {operation} {postnum} {answer ? ' =' : ''}
        </span>
      </section>
      <section className="buttons">
        <div onClick={clear}>{buffer ? 'CE' : 'AC'}</div>
        <div onClick={swapPositivity}>+/-</div>
        <div onClick={calcPercent}>%</div>
        <div onClick={() => chooseOperator(Operation.DIVIDE)}>÷</div>
        <div onClick={() => addToBuffer(7)}>7</div>
        <div onClick={() => addToBuffer(8)}>8</div>
        <div onClick={() => addToBuffer(9)}>9</div>
        <div onClick={() => chooseOperator(Operation.MULTIPLY)}>x</div>
        <div onClick={() => addToBuffer(4)}>4</div>
        <div onClick={() => addToBuffer(5)}>5</div>
        <div onClick={() => addToBuffer(6)}>6</div>
        <div onClick={() => chooseOperator(Operation.SUBTRACT)}>-</div>
        <div onClick={() => addToBuffer(1)}>1</div>
        <div onClick={() => addToBuffer(2)}>2</div>
        <div onClick={() => addToBuffer(3)}>3</div>
        <div onClick={() => chooseOperator(Operation.ADD)}>+</div>
        <div onClick={() => addToBuffer('00')}>00</div>
        <div onClick={() => addToBuffer(0)}>0</div>
        <div onClick={() => addToBuffer('.')}>.</div>
        <div onClick={equals}>=</div>
      </section>
    </main>
  );

  function equals() {
    if (buffer === 'NO / 0') return;
    if (!buffer || !prenum) return;

    let ans: number;
    let buff = Number(buffer);
    let pre = prenum;

    if (buff === 0 && pre === 0 && operation === Operation.DIVIDE) {
      setPostnum(0);
      setBuffer('NO / 0');
      return;
    }

    if (!!answer && !!pre && !!postnum) {
      buff = postnum;
      pre = answer;
    }

    switch (operation) {
      case Operation.ADD:
        ans = rust.add(pre, buff);
        break;
      case Operation.SUBTRACT:
        ans = rust.subtract(pre, buff);
        break;
      case Operation.MULTIPLY:
        ans = rust.multiply(pre, buff);
        break;
      case Operation.DIVIDE:
        ans = rust.divide(pre, buff);
        break;
    }

    const rounded = rust.round_for_calc(ans);
    setPrenum(pre);
    setPostnum(buff);
    setAnswer(rounded);
    setBuffer('');
    return rounded;
  }

  function swapPositivity() {
    if (!!buffer) {
      const num = Number(buffer);
      let flippedNum: number;
      if (num > 0) {
        flippedNum = -Math.abs(num);
      } else {
        flippedNum = Math.abs(num);
      }

      setBuffer(flippedNum.toString());
    }
  }

  function calcPercent() {
    if (!!prenum) {
      const dec = rust.percent_decimal(Number(buffer));
      const perc = rust.multiply(prenum, dec);
      setBuffer(perc.toString());
    } else {
      setBuffer('');
    }
  }

  function chooseOperator(operator: Operation) {
    if (!!answer) {
      setOperation(operator);
      setPrenum(answer);
      setPostnum(null);
      setAnswer(null);
      return;
    }
    if (!!buffer && !!prenum) {
      const newAnswer = equals();
      setOperation(operator);
      setPrenum(newAnswer);
      setPostnum(null);
      setAnswer(null);
      return;
    }
    if (!!buffer) {
      setOperation(operator);
      setPrenum(Number(buffer));
      setBuffer('');
      return;
    }
    if (!!operation) {
      setOperation(operator);
    }
  }

  function reset() {
    setPrenum(null);
    setPostnum(null);
    setOperation(null);
    setAnswer(0);
  }

  function clear() {
    if (!!buffer) {
      setBuffer('');
    } else {
      reset();
    }
  }

  function addToBuffer(num: number | string) {
    setBuffer(buffer + num);
  }
}
