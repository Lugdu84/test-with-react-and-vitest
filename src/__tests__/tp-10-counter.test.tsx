// Tests du composant Counter

describe('test du composant Counter avec les valeurs par défauts', () => {
	// Vous pouvez utiliser un beforeEach pour éviter de répéter le code

	it('Le composant est initialisé. O est affiché (la valeur par défaut pour notre compteur).', () => {});
	it('Si on incremente, 1 est affiché', () => {});
	it("Si on incremente deux fois, puis qu'on décremente une fois, 1 est affiché", () => {});
	it('On ne peut pas descendre en dessous de 0, Si on est déjà à 0, le bouton "-" doit être "disabled"', () => {});
	it('Si on modifie le step à 2, on incremente de 2 (ça affiche 2) et on décremente de 2 (ça affiche 0)', () => {});
	it('Si on clique sur le bouton reset, count est réinitialisé à 0', () => {});
});

describe('Le composant Counter est initialisé avec une valeur maximum de 3 (maxValue)', () => {
	it('Si on clique 3 fois sur increment, le bouton "+" doit être "disabled", car on a atteint la valeur maximum', () => {});
});

describe('Le composant Counter est initialisé avec une valeur maximum de 10 (maxValue) et une valeur initiale de 6', () => {
	it('La valeur du compteur est initialisée à 6', () => {});
	it("Si on clique 4 fois sur le bouton increment, le bouton '+' doit être 'disabled', car on a atteint la valeur maximum", () => {});
	it("Si on clique 2 fois sur le bouton increment, et qu'on reset, la valeur du compteur est réinitialisée à 6", () => {});
});

describe('Le composant Counter est initialisé avec une valeur maximum de 12 (maxValue), une valeur initiale de 6 et un step de 5', () => {
	it('Si on clique sur le bouton increment, la valeur du compteur est incrémentée de 5 et on affiche 11. Le bouton "+" doit être "disabled"', () => {});
	it('Si on clique sur le bouton decrement, le bouton "-" doit être disabled', () => {});
});
describe('Le composant Counter est initialisé avec une valeur maximum de 10 (maxValue), une valeur initiale de 5 et un step de 5', () => {
	it('Si on clique sur le bouton increment, la valeur du compteur est incrémentée de 5 (ça affiche 10), le bouton "+" doit être "disabled"', () => {});
	it('Si on clique sur le bouton decrement, ça affiche 0 et le bouton "-" doit être disabled', () => {});
});
