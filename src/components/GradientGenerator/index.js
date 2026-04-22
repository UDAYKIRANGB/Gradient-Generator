import {Component} from 'react'
import {
  GradientGeneratorContainer,
  Heading,
  UnOrderedList,
  ColorContainer,
  ColorDetails,
  InputElement,
  ButtonElement,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'to top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'to bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'to right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'to left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
  }

  onClickDirection = value => {
    this.setState({activeDirection: value})
  }

  onChageColor1 = event => {
    this.setState({inputColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({inputColor2: event.target.value})
  }

  onGenerate = () => {
    const {inputColor1, inputColor2} = this.state
    this.setState({color1: inputColor1, color2: inputColor2})
  }

  render() {
    const {
      activeDirection,
      color1,
      color2,
      inputColor1,
      inputColor2,
    } = this.state

    const activeDirectionObj = gradientDirectionsList.find(
      each => each.value === activeDirection,
    )

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        direction={activeDirectionObj.value}
        color1={color1}
        color2={color2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Heading as="p">Choose Direction</Heading>
        <UnOrderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              details={each}
              key={each.directionId}
              onClickDirection={this.onClickDirection}
              isActive={each.value === activeDirection}
            />
          ))}
        </UnOrderedList>
        <Heading as="p">Pick the Colors</Heading>
        <ColorContainer>
          <ColorDetails>
            <Heading as="p">{inputColor1}</Heading>
            <InputElement
              type="color"
              value={inputColor1}
              onChange={this.onChageColor1}
            />
          </ColorDetails>
          <ColorDetails>
            <Heading as="p">{inputColor2}</Heading>
            <InputElement
              type="color"
              value={inputColor2}
              onChange={this.onChangeColor2}
            />
          </ColorDetails>
        </ColorContainer>
        <ButtonElement type="button" onClick={this.onGenerate}>
          Generate
        </ButtonElement>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
