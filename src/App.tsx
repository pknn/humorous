import { Header } from './components/Header/Header'
import { ColorBoxes } from './components/ColorBoxes'

const App = () => {
  return (
    <div className="p-2 bg-neutral-100 h-screen flex flex-col relative">
      <Header />
      <ColorBoxes />
    </div>
  )
}

export default App
