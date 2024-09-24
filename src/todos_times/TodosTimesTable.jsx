import React, { useEffect, useState } from 'react'


const TodosTimesTable = () => {
	const [data, setData] = useState({})

	useEffect(() => {
		fetch('data/todos_times.json')
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error('Erro ao carregar dados:', error))
	}, [])

  return (
    <div>
      {Object.keys(data).length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
						{data[Object.keys(data)[0]].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Object.keys(data).map((key) => (
									<td key={key}>{data[key][rowIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TodosTimesTable