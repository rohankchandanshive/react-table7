import logo from "./logo.svg";
// import './App.css';
import React, { useMemo, useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useRowSelect,
  useExpanded,
  useGroupBy
} from "react-table";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DATA from "./api.json";
import PatientNameCell from "./PatientNameCell";

import { ColumnFilter } from "./components/ColumnFilter";

import { COLUMNS, HIDEABLECOLUMNS } from "./components/columns";

import Checkbox from "./components/Checkbox";

import Button from "./components/Button";

import PracticeConfig from "./practiceConfigData.json";

function RowSelection() {
  const columns = useMemo(() => COLUMNS, []);

  // const allData = DATA.appointments.push(PracticeConfig)
  // console.log("All Data",allData);
  const data = useMemo(() => DATA.appointments, []);


  const defaultColumn = useMemo(() => {
    return { Filter: ColumnFilter };
  }, []);

  // const tableInstance = useTable({columns,data, defaultColumn},useRowSelect,
  //   (hooks)=>{
  //     hooks.visibleColumns.push(()=>{
  //       return [
  //         {
  //           id: 'select',
  //           Header: ({ getToggleAllRowsSelectedProps })=>(
  //             <Checkbox {...getToggleAllRowsSelectedProps()}/>
  //           ),

  //           Cell: ({row})=>{
  //             <Checkbox {...row.getToggleAllRowSelectedProps()} />
  //           }
  //         },
  //         ...columns
  //       ]
  //     })
  // },useFilters,useGlobalFilter);


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    allColumns,
    getToggleHideAllColumnsProps,
    state: { expanded },
    setHiddenColumns
  } = useTable(
    {
      columns,
      data,
      defaultColumn
      // hiddenColumns: columns
      //   .filter((column) => !column.isVisible)
      //   .map((column) => column.id)
    },
    useFilters,
    useGlobalFilter,
    useExpanded,
    useRowSelect,
    (hooks) => {
      console.log('hooks',hooks.headerGroups);
      hooks.visibleColumns.push((columns) => {
        console.log("column RS",columns)
        return [
          {
            id: "select",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),

            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
          },

          ...columns
        ];
      });
    }
  );

  React.useEffect(() => {
    setHiddenColumns(
      columns.filter((column) => !column.isVisible).map((column) =>column.id)
    );
  }, [columns]);
  // console.log("rows",rows.length);
  const firstPageRows = rows.slice(0, rows.length);

  // const [visibility, setvisibility] = useState(false);

  // const toggleColumnsVisibility = (e)=>{
  //   console.log("toggleColumnsVisibility",e)
  // }

  // console.log("columns",allColumns);

  // console.log("datajson",COLUMNS , Data)

  return (
    // apply the table props
    <div>
      <div>
        {/* <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle */}
        {/* All */}
        {/* { */}
        {/* // allColumns.map(column =>( */}
        {/* // <div> */}
        {/* <label key={column.id }> */}
        {/* <Checkbox {...column.getToggleHiddenProps()} />{column.Header} */}
        {/* <Button {...column.getToggleHiddenProps()} />{column.Header} */}
        {/* </label> */}
      </div>
      {/* ) */}
      {/* ) */}
      {/* } */}
      {/* </div> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div>{column.canFilter && column.render("Filter")}</div>
                  {/* <span>{column.id === 'precheck' ? 'icon': null}</span> */}
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original)
            },
            null,
            2
          )}
        </code>
      </pre>
      <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
    </div>
  );
}

export default RowSelection;
