import logo from './logo.svg';
import './App.css';
import  React , {useMemo} from 'react';
import { useTable,useGlobalFilter, useFilters } from "react-table";
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DATA from "./api.json"
import PatientNameCell from './PatientNameCell';

import {ColumnFilter} from './components/ColumnFilter'
 
import { COLUMNS, HIDEABLECOLUMNS } from "./components/columns";
import { alwaysDisplayedColumns, hideableColumns ,precheckColumns } from "./components/hideableCols";
import PracticeConfig from "./practiceConfigData.json";



function App() {

  const columns = useMemo( ()=> COLUMNS ,[])
  // const hideAbleColumns = useMemo(() => HIDEABLECOLUMNS, []);
  const data = useMemo( ()=> DATA.appointments ,[])
console.log("columns",columns)
// const allCol = false ? [...columns,...hideAbleColumns] : [...columns]

  // console.log('allCols',allCol);

const defaultColumn=useMemo(()=>{
  return{ Filter: ColumnFilter}
},[])

const getTableData=(alwaysDisplayedColumns,hideableColumns,precheckColumns)=>{
  console.log('display columns',alwaysDisplayedColumns , hideableColumns);
  const tableSettings = true ? [...alwaysDisplayedColumns,...hideableColumns] : [...alwaysDisplayedColumns];
 
  if(precheckColumns !== 0){

    const precheckTableSettings={
      Header: 'PreCheck',
      id: 'precheck',
      disableFilters: true,
      // accessor: (appointment)=>{ checkColumnEnable(PracticeConfig)},
      columns: precheckColumns
    }

    tableSettings.push(precheckTableSettings);
  }

  

  console.log('all columns',tableSettings);
  return tableSettings
}

// getTableData(alwaysDisplayedColumns,hideableColumns,precheckColumns);
const allcolsss=getTableData(alwaysDisplayedColumns,hideableColumns,precheckColumns);
console.log('get All columns',allcolsss);

  const tableInstance = useTable({allcolsss,data,defaultColumn},useFilters,useGlobalFilter)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance


  console.log("data",tableInstance);

  // console.log("datajson",COLUMNS , Data)

  return (
    // apply the table props
    
    <table {...getTableProps()}>
      <thead>
        {
        headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} >
            {
            headerGroup.headers.map(column => (
              // console.log('columnsssss',column),
              <th {...column.getHeaderProps()}>
                <div>{column.canFilter && column.render('Filter')}</div>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
        rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {
              row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {
                    cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default App;
