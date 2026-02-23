import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-5xl mx-auto p-8 text-center">
        <div className="flex gap-8 justify-center mb-8">
          <a href="https://vite.dev" target="_blank" className="transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-blue-600">
            <img src={viteLogo} className="h-24 p-6 will-change-auto transition-all duration-300 hover:brightness-110" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-blue-400">
            <img src={reactLogo} className="h-24 p-6 will-change-auto transition-all duration-300 hover:brightness-110" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold mb-8">Vite + React</h1>
        <div className="p-8 bg-white rounded-lg shadow-md mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors mb-4" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="text-gray-700 mt-4">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
