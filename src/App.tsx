import { invoke } from "@tauri-apps/api/core"
import { useState } from "react"

function App() {

  const [resultado, setResultado] = useState(0)

  async function calcular() {
    const res = await invoke("sumar", { a: 5, b: 3 })
    setResultado(res as number)
  }

  return (
    <div>
      <h1>App escritorio React + Rust</h1>

      <button onClick={calcular}>
        Sumar
      </button>

      <p>Resultado: {resultado}</p>
    </div>
  )
}

export default App
