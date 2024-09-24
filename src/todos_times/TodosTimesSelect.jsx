import './TodosTimesSelect.css'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodosTimesSelect = () => {
	const [timeBlue, setTimeBlue] = useState('Blue team')
	const [timeRed, setTimeRed] = useState('Red team')
	const [data, setData] = useState({})
	const [indexTimeBlue, setIndexTimeBlue] = useState(0)
	const [indexTimeRed, setIndexTimeRed] = useState(0)

	useEffect(() => {
		fetch('data/todos_times.json')
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error('Erro ao carregar dados:', error))
	}, [])

	const handleTeam = (e, team) => {
		const selectedName = e.target.value
		const index = data.Name.findIndex((name) => name === selectedName)

		console.log('Posição:', index)

		if (team === 'blue') {
			setTimeBlue(selectedName)
			setIndexTimeBlue(index)
		} else if (team === 'red') {
			setTimeRed(selectedName)
			setIndexTimeRed(index)
		}
	}

	return (
		<>
			<div className='h-50 d-flex flex-row justify-content-center align-items-center'>
				<div className='d-flex flex-column'>
					<h1 className='text-primary'>{timeBlue}</h1>

					{data.Name && (
						<select className='clicked' onChange={(e) => handleTeam(e, 'blue')}>
							{data.Name.map((name) => (
								<option key={name} value={name}>{name}</option>
							))}
						</select>
					)}
				</div>

				<div className='d-flex align-items-center gradient-text clicked'>
					<h3 className='mb-0'>V</h3>
					<h3 className='mb-0'>S</h3>
				</div>

				<div className='d-flex flex-column'>
					<h1 className='text-danger'>{timeRed}</h1>

					{data.Name && (
						<select className='clicked' onChange={(e) => handleTeam(e, 'red')}>
							{data.Name.map((name) => (
								<option key={name} value={name}>{name}</option>
							))}
						</select>
					)}
				</div>
			</div>

			<div className='d-flex flex-column'>
				<div>
					<h3>Jogos</h3>
					<h4>{data.Games[indexTimeBlue]}</h4>
					<h4>{data.Games[indexTimeRed]}</h4>
				</div>
				<h3>Win Rate</h3>
				<h3>Duração do jogo</h3>
				<h3>FB%</h3>
				<h3>K:D</h3>
				<h3>Kills</h3>
				<h3>Deaths</h3>
				<h3>Torres destruidas</h3>
				<h3>Torres perdidas</h3>
				<h3>Gold@15</h3>
				<h3>Torre@15</h3>
			</div>
		</>
	)
}

export default TodosTimesSelect
