import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills component', () => {
  test('debe renderizar al menos 5 habilidades', () => {
    render(<Skills />);
    const chips = screen.getAllByRole('button');
    expect(chips.length).toBeGreaterThanOrEqual(5);
  });
});
