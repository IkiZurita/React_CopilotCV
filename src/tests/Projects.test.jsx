import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects component', () => {
  test('debe mostrar al menos 3 proyectos', () => {
    render(<Projects />);
    const cards = screen.getAllByText(/VR|educativo|musical/i);
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });
});
