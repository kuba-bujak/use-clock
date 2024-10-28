import { render, screen } from '@testing-library/react'
import App from './App'

test('generuje główną stronę aplikacji', () => {
  render(<App />)
  const linkElement = screen.getByText(/prosty zegar/i)
  expect(linkElement).toBeInTheDocument()
})
