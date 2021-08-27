import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  var test : string = "Abc"
  var abc : string = "abc"
  if(test === abc){
    console.log("Nice")
  }
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
