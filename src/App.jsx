import './App.css'
import TodosTimesSelect from './todos_times/TodosTimesSelect'
import TodosTimesTable from './todos_times/TodosTimesTable'

function App() {
	return (
		<div className='h-100'>
			<TodosTimesSelect />
			<TodosTimesTable />
		</div>
	)
}

export default App
