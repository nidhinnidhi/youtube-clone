import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
describe('Youtube clone homepage', () => {
    it('should have a logo', () => {
        const { container } = render(<App />);
        expect(container.querySelector('svg.logo')).toBeDefined();
    });
});
