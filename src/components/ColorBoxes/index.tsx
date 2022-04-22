import { useColors } from '../../hooks/useColors/useColors'
import { Color } from '../../model/color'
import { Button } from '../Button.tw'
import { ColorBoxes as InnerColorBoxes } from './ColorBoxes'
import { PlaceHolder } from './PlaceHolder'

export const ColorBoxes = () => {
  const { isLoading, colors, refresh } = useColors()

  const handleClick = () => {
    refresh()
  }

  return (
    <div className="h-full flex flex-col">
      <div className="my-4 text-center">
        <Button onClick={handleClick}>Generate</Button>
      </div>
      {isLoading ? (
        <PlaceHolder />
      ) : (
        <InnerColorBoxes colors={colors as Color[]} />
      )}
    </div>
  )
}
