import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${props =>
    `linear-gradient(${props.direction}, ${props.color1}, ${props.color2})`};
  min-height: 100vh;
`

export const Heading = styled.h1`
  font-size: 32px;
  color: #ffffff;
`
export const UnOrderedList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
`
export const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ColorDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

export const InputElement = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  height: 50px;
  width: 120px;
`

export const ButtonElement = styled.button`
  background-color: #00c9b7;
  padding: 10px;
  color: #ffffff;
  border-radius: 8px;
`
