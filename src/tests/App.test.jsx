import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders name correctly', () => {
    render(<App />);
    const nameElement = screen.getByText(/Íkiam Zurita/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders phone number correctly', () => {
    render(<App />);
    const phoneElement = screen.getByText(/0984698264/);
    expect(phoneElement).toBeInTheDocument();
  });

  test('renders at least one skill', () => {
    render(<App />);
    const skillElement = screen.getByText(/Comunicación/i);
    expect(skillElement).toBeInTheDocument();
  });

  test('renders at least one project', () => {
    render(<App />);
    const projectElement = screen.getByText(/Banco Pichincha/i);
    expect(projectElement).toBeInTheDocument();
  });

  test('renders at least one language', () => {
    render(<App />);
    const languageElement = screen.getByText(/JavaScript/i);
    expect(languageElement).toBeInTheDocument();
  });
});
