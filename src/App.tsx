import Counter from './components/counter';
import SearchBar from './components/search-bar';

function App() {
	return (
		<div className="container p-4">
			<Counter />
			<SearchBar onSearch={(e) => console.log(e)} />
		</div>
	);
}

export default App;
