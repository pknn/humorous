import { Header } from './components/Header/Header'
import { ColorBoxes } from './components/ColorBoxes'
import { useColors } from './hooks/useColors/useColors'

const App = () => {
  const { colors, isLoading, refresh } = useColors()

  return (
    <div className="p-2 bg-neutral-100 h-screen flex flex-col">
      <Header />
      <ColorBoxes isLoading={isLoading} colors={colors} />
    </div>
  )
}

export default App
