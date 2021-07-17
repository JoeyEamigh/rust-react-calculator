import { useEffect, useState } from 'react';
import './App.scss';
import * as rust from './native/pkg';

function App() {
  // const [rust, setRust] = useState<>(null);

  // useEffect(() => {
  //   import('./native/pkg').then((module) => setRust(module));
  // }, []);

  return <main>{rust.add(1, 2)}</main>;
}

export default App;
