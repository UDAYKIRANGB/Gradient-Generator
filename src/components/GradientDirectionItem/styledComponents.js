import styled from 'styled-components'

export const GradientDirectionItemContainer = styled.li`
  display: flex;
`
export const Button = styled.button`
  background-color: #ededed;
  padding: 7px;
  border-radius: 8px;
  height: 35px;
  width: 100px;
  border: none;
  margin-right: 20px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
