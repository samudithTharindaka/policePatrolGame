import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { ThreeDCardDemo } from './components/CardTest';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className='basis-1/2'>
      </div>
      <div className='basis-1/2'>
        <ThreeDCardDemo />
      </div>
      
    </div>
  );
}

export default App;
