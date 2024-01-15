import { useCounter } from '../hooks/use-counter';
import { renderHook, act } from '@testing-library/react';

// initial value 0 by default ok
// increment (step 1 by default) ok
// decrement (step 1 by default) ok
// not decrement below 0 ok
// init with initial value ok
// init with initial step ok
// init with initial value and step ok
// reset (initial value) ok
// change step ok

// new feature maxValue, si pas de maxValue, pas de limite
// sinon on ne peut pas dépasser la valeur de maxValue

describe('useCounter', () => {
	// Ne fonctionne pas, car le hook doit être appelé dans un composant
	// it('by default, the initial value is 0', () => {
	// 	const { count } = useCounter();
	// 	expect(count).toBe(0);
	// });
	it('by default, the initial value is 0', () => {
		const { result: counter } = renderHook(() => useCounter());
		expect(counter.current.count).toBe(0);
	});
	it('increment (step 1 by default)', () => {
		const { result: counter } = renderHook(() => useCounter());
		act(() => {
			counter.current.increment();
		});
		expect(counter.current.count).toBe(1);
	});
	it('decrement (step 1 by default)', () => {
		const { result: counter } = renderHook(() => useCounter());

		act(() => {
			counter.current.increment();
		});
		act(() => {
			counter.current.increment();
		});
		act(() => {
			counter.current.decrement();
		});
		expect(counter.current.count).toBe(1);
	});
	it('not decrement below 0', () => {
		const { result: counter } = renderHook(() => useCounter());
		act(() => {
			counter.current.decrement();
		});
		expect(counter.current.count).toBe(0);
	});
	it('init with initial value', () => {
		const { result: counter } = renderHook(() =>
			useCounter({ initialValue: 5 })
		);
		expect(counter.current.count).toBe(5);
	});
	it('init with initial step', () => {
		const { result: counter } = renderHook(() =>
			useCounter({ initialStep: 5 })
		);
		act(() => {
			counter.current.increment();
		});
		expect(counter.current.count).toBe(5);
	});
	it('init with initial value and step, and test increment, decrement', () => {
		const { result: counter } = renderHook(() =>
			useCounter({ initialValue: 5, initialStep: 2 })
		);
		act(() => {
			counter.current.increment();
		});
		expect(counter.current.count).toBe(7);
		act(() => {
			counter.current.decrement();
		});
		expect(counter.current.count).toBe(5);
	});
	it('reset (initial value)', () => {
		const { result: counter } = renderHook(() =>
			useCounter({ initialValue: 5, initialStep: 2 })
		);
		act(() => {
			counter.current.increment();
		});
		expect(counter.current.count).toBe(7);
		act(() => {
			counter.current.reset();
		});
		expect(counter.current.count).toBe(5);
	});
	it('change step', () => {
		const { result: counter } = renderHook(() =>
			useCounter({ initialValue: 5, initialStep: 2 })
		);
		act(() => {
			counter.current.changeStep(3);
		});
		act(() => {
			counter.current.increment();
		});
		expect(counter.current.count).toBe(8);
	});
	it('test with maxValue', () => {
		const { result: counter } = renderHook(() =>
			useCounter({ initialValue: 7, initialStep: 4, maxValue: 10 })
		);
		act(() => {
			counter.current.increment();
		});
		expect(counter.current.count).toBe(10);
		act(() => {
			counter.current.increment();
		});
		act(() => {
			counter.current.increment();
		});
		expect(counter.current.count).toBe(10);
	});
});
