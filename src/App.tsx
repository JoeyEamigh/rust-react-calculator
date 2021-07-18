import { useEffect, useState } from 'react';
import './App.scss';
import type * as Rust from './native/pkg/index';
import Loading from './components/loading/loading';
import Calculator from './components/calculator/calculator';

function App() {
  const [rust, setRust] = useState<typeof Rust>(null);

  useEffect(() => {
    import('./native/pkg/index').then((module) => setRust(module));
  }, []);

  return (
    <main className="rusty-calc">
      <h1>Rusty Calculator</h1>
      {rust ? <Calculator rust={rust} /> : <Loading />}
    </main>
  );
}

export default App;
