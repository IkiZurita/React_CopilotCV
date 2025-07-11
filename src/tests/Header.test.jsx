import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  test('debe mostrar la imagen con alt correcto', () => {
    render(<Header />);
    const image = screen.getByAltText('Íkiam Zurita');
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
  });

  test('debe contener el nombre completo', () => {
    render(<Header />);
    expect(screen.getByText(/Íkiam Zurita/i)).toBeInTheDocument();
  });
});
