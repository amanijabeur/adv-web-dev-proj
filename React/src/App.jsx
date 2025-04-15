import React from 'react';
import './style.css';
import Pro from './pro';

function App() {

  return (
    <div>
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
      <Pro />
      
      <footer>
        <p>© 2025 React Project Website by Ameni Jabeur</p>
      </footer>
    </div>
  );
}
export default App;




