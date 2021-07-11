import { render, screen } from '@testing-library/react';
import App from './App';

test('render ComponentA', () => {
  render(<App />);
  const componentA = screen.getByText(/ComponentA/i);
  expect(componentA).toBeInTheDocument();
});
