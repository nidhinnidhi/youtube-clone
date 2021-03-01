import { render, screen } from '@testing-library/react';
import App from './App';

describe('Youtube clone homepage', () => {
    it('should have a logo', () => {
        const { container } = render(<App />);
        expect(container.querySelector('svg.logo')).toBeDefined();
    });
});
