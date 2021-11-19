import React from 'react'

// export const ColumnFilter=({column})=> {
//     const {filterValue,setFilter}=column;
//     return (
//         <div>
//             <input  value={filterValue || ''} onChange={(e)=> setFilter(e.target.value)} />
//         </div>
//     )
// }


export const ColumnFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) => {
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
  
    return (
      <select
        id="custom-select"
        type="select"
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }
