import React from 'react'
import ReactDOM from 'react-dom'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('prevents leading zeros', () => {
  const { getByTestId, getAllByRole } = render(<App/>)
  const buttons = getAllByRole('button')
  const zero = buttons.find(node => node.textContent === '0')
  const one = buttons.find(node => node.textContent === '1')
  const expression = getByTestId('expression')
  const input = getByTestId('input')

  fireEvent.click(zero)
  fireEvent.click(one)

  expect(expression).toHaveTextContent(/^1$/)
  expect(input).toHaveTextContent(/^1$/)
})

test('prevents multiple decimals', () => {
  const { getByTestId, getAllByRole } = render(<App/>)
  const buttons = getAllByRole('button')
  const one = buttons.find(node => node.textContent === '1')
  const decimal = buttons.find(node => node.textContent === '.')
  const expression = getByTestId('expression')
  const input = getByTestId('input')

  fireEvent.click(one)
  fireEvent.click(decimal)
  fireEvent.click(decimal)
  fireEvent.click(one)

  expect(expression).toHaveTextContent(/^1\.1$/)
  expect(input).toHaveTextContent(/^1\.1$/)
})

test('prepends decimal with zero', () => {
  const { getByTestId, getAllByRole } = render(<App/>)
  const buttons = getAllByRole('button')
  const one = buttons.find(node => node.textContent === '1')
  const decimal = buttons.find(node => node.textContent === '.')
  const expression = getByTestId('expression')
  const input = getByTestId('input')

  fireEvent.click(decimal)
  fireEvent.click(one)

  expect(expression).toHaveTextContent(/^0\.1$/)
  expect(input).toHaveTextContent(/^0\.1$/)
})

test('uses last operator clicked', () => {
  const { getByTestId, getAllByRole } = render(<App/>)
  const buttons = getAllByRole('button')
  const one = buttons.find(node => node.textContent === '1')
  const times = buttons.find(node => node.textContent === '*')
  const plus = buttons.find(node => node.textContent === '+')
  const expression = getByTestId('expression')
  const input = getByTestId('input')

  fireEvent.click(one)
  fireEvent.click(times)
  fireEvent.click(plus)

  expect(expression).toHaveTextContent(/^1\+$/)
  expect(input).toHaveTextContent(/^\+$/)
})

test('uses negative on operator followed by minus', () => {
  const { getByTestId, getAllByRole } = render(<App/>)
  const buttons = getAllByRole('button')
  const one = buttons.find(node => node.textContent === '1')
  const times = buttons.find(node => node.textContent === '*')
  const minus = buttons.find(node => node.textContent === '-')
  const expression = getByTestId('expression')
  const input = getByTestId('input')

  fireEvent.click(one)
  fireEvent.click(times)
  fireEvent.click(minus)

  expect(expression).toHaveTextContent(/^1\*-$/)
  expect(input).toHaveTextContent(/^-$/)
})

test('uses subtraction on negative followed by minus', () => {
  const { getByTestId, getAllByRole } = render(<App/>)
  const buttons = getAllByRole('button')
  const one = buttons.find(node => node.textContent === '1')
  const times = buttons.find(node => node.textContent === '*')
  const minus = buttons.find(node => node.textContent === '-')
  const expression = getByTestId('expression')
  const input = getByTestId('input')

  fireEvent.click(one)
  fireEvent.click(times)
  fireEvent.click(minus)
  fireEvent.click(minus)

  expect(expression).toHaveTextContent(/^1-$/)
  expect(input).toHaveTextContent(/^-$/)
})
