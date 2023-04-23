import { AppRouter } from "./routes/AppRouter"


function App() {



  return (
    <>
      <header className="bg-cuasi color-light text-center header">

        <p>Práctica SPA</p>

      </header>
      
      <AppRouter/>
    
      <footer className="bg-cuasi color-light text-center header">

        <p>Footer</p>

      </footer>
    </>
  )
}

export default App
