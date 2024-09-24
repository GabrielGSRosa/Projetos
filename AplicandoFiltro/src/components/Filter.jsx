import React from 'react'
import { useState } from 'react'

function Filter() {
    const [names, setNames] = useState(["Ana", "Bruno", "Carla", "Daniel", "Eduardo", "Fernanda"]);
    
    const [filter, setFilter] = useState("")

    const handleSetFilter = (e) => {
        setFilter(e.target.value)
    }

    const namesFiltered = names.filter((name) => name.toLocaleLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
        <form>
            {/* Onde o usuário vai filtrar o nome */}
            <div>
                <label htmlFor="pesquisa">Insira o nome que deseja filtrar:</label>
                <input type="text" name='pesquisa' placeholder='Insira o nome que deseja filtrar:' value={filter} onChange={handleSetFilter}/>
            </div>
        </form>
        {/* Apresenta a lista de nomes */}
        <ul>
            {namesFiltered.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Filter