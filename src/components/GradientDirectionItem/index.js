import {GradientDirectionItemContainer, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClickDirection, isActive} = props
  const {value, displayText} = details

  const onClickButton = () => {
    onClickDirection(value)
  }

  return (
    <GradientDirectionItemContainer>
      <Button type="button" onClick={onClickButton} isActive={isActive}>
        {displayText}
      </Button>
    </GradientDirectionItemContainer>
  )
}

export default GradientDirectionItem
