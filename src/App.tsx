import { Header } from './components/Header/Header'
import { ColorBoxes } from './components/ColorBoxes'
import { useColors } from './hooks/useColors/useColors'
import { Button } from './components/Button.tw'

const App = () => {
  const { colors, isLoading, refresh } = useColors()

  const handleClick = () => {
    refresh()
  }

  return (
    <div className="p-2 bg-neutral-100 h-screen flex flex-col">
      <Header />
      <div className="my-4 text-center">
        <Button onClick={handleClick}>Generate</Button>
      </div>
      <ColorBoxes isLoading={isLoading} colors={colors} />
    </div>
  )
}

export default App
