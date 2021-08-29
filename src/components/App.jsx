import React, { useEffect, useState } from 'react';
import Kural from './Kural';
import MenuBookIcon from '@material-ui/icons/MenuBook';

function App() {
	const [number, setNumber] = useState('');
	const [kuralNumber, setKuralNumber] = useState(1);
	const [kuralData, setKuralData] = useState({});

	const handleChange = (e) => {
		const val = parseInt(e.target.value);
		setNumber(val);
	};

	const handleClick = () => {
		setKuralNumber(number);
		setNumber('');
	};

	useEffect(() => {
		fetchKural();
	}, [kuralNumber]);

	function fetchKural() {
		fetch(`https://api-thirukkural.vercel.app/api?num=${kuralNumber}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setKuralData(data);
			});
	}

	return (
		<>
			<header>
				<h1>
					<MenuBookIcon />
					&nbsp;திருக்குறள்
				</h1>
			</header>
			<div className="App">
				<input type="number" value={number} onChange={handleChange} />
				<button onClick={handleClick}>அழுத்தவும்</button>
				<Kural kuralData={kuralData} />
			</div>
			<footer>
				<p>பதிப்புரிமை &copy; 2021</p>
			</footer>
		</>
	);
}

export default App;

// https://api-thirukkural.web.app/
