import { ColorBox } from './components/ColorBox'
import { Header } from './components/Header'

const App = () => (
  <div className="p-2 bg-neutral-200 h-screen w-screen">
    <Header />
    <ColorBox color={{ type: 'HSL', components: ['12', '20%', '60%'] }} />
    <ColorBox color={{ type: 'RGB', components: ['233', '245', '182'] }} />
  </div>
)

export default App
