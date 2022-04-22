import { Header } from './components/Header/Header'
import { ColorBoxes } from './components/ColorBoxes'

const App = () => (
  <div className="p-2 bg-neutral-200 h-screen flex flex-col">
    <Header />
    <ColorBoxes />
  </div>
)

export default App
