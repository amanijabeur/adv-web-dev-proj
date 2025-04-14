import React, { useState } from 'react';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React</h1>
      <header>
        <h1>Welcome to My Website</h1>
        <p>This is my first website using React!</p>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>Hello, I am Ameni Jabeur, a sophomore student at TBS.</p>
        </section>
      </main>

      <footer>
        <p>© 2025 React Project Website by Ameni Jabeur</p>
      </footer>
    </div>
  );
}
export default App;



