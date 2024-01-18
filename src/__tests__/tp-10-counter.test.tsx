// Tests du composant Counter
import Counter from '@/components/counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe('test du composant Counter', () => {
	// Vous pouvez utiliser un beforeEach pour éviter de répéter le code
	let minusButton: HTMLButtonElement;
	let plusButton: HTMLButtonElement;
	beforeEach(() => {
		render(<Counter />);
		minusButton = screen.getByRole('button', { name: '-' });
		plusButton = screen.getByRole('button', { name: '+' });
	});
	it('Le composant est initialisé. O est affiché (la valeur par défaut pour notre compteur).', () => {
		expect(screen.getByText(0));
		fireEvent.click(minusButton);
		expect(screen.getByText(0));
	});
	it('Si on incremente, 1 est affiché', () => {
		fireEvent.click(plusButton);
		expect(screen.getByText(1));
	});
	it("Si on décremente deux fois, puis qu'on décremente une fois, 1 est affiché", () => {
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);
		fireEvent.click(minusButton);
		expect(screen.getByText(1));
	});
	it('On ne peut pas descendre en dessous de 0', () => {
		fireEvent.click(minusButton);
		expect(screen.getByText(0));
	});
});
