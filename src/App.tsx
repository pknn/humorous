import { Header } from './components/Header/Header'
import { ColorBoxes } from './components/ColorBoxes'
import { useColors } from './hooks/useColors/useColors'

const App = () => {
  const [colors, status, refresh] = useColors()

  return (
    <div className="p-2 bg-neutral-200 h-screen flex flex-col">
      <Header />
      <ColorBoxes colors={colors} />
    </div>
  )
}

export default App
