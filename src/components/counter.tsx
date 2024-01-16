import { Button } from '@/components/ui/button';
import { useCounter } from '@/hooks/use-counter';

export default function Counter() {
	const { count, increment, decrement } = useCounter();
	return (
		<div className="border shadow-xl p-2 w-48 justify-center">
			<h2>Notre super compteur !</h2>
			<div className="flex items-center justify-evenly mt-2">
				<Button onClick={decrement}>-</Button>
				<span className="text-2xl">{count}</span>
				<Button onClick={increment}>+</Button>
			</div>
		</div>
	);
}
