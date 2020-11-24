import { render, screen } from '@testing-library/react';
import { createStore } from './redux/createStore';
import { counter } from './redux/counter';
import App from './App';

test('renders learn react link', () => {
  const store = createStore(counter)
  render(<App store={store}/>);
  const linkElement = screen.getByText('An introduction to Redux');
  expect(linkElement).toBeInTheDocument();
});
