import React, { useMemo, useEffect, useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useRowSelect,
  useColumnOrder,
  useExpanded
} from "react-table";
// import CssBaseline from '@material-ui/core/CssBaseline'
// import MaUTable from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
import DATA from "../api.json";
import _ from "lodash";
import memoizeOne from "memoize-one";
// import PatientNameCell from './PatientNameCell';

// import {ColumnFilter} from './components/ColumnFilter'

import { COLUMNS, HIDEABLECOLUMNS ,HiddenColumns } from "../components/columns";
import {
  alwaysDisplayedColumns,
  hideableColumns,
  precheckColumns,
  messageService
} from "../components/hideableCols";
import PracticeConfig from "../practiceConfigData.json";
import Checkbox from "./Checkbox";
import ToggleHideCol from "./toggleHideCol";



function HidingCols() {
  // let allCOLmns;
  const [visibility, updateVisibility] = useState(true);

  // const [expanded, setExpanded] = useState(true);
  const initialValue = true;

  const [displayAllColumns, setDisplayAllColumns] = useState(initialValue);

  const columns = useMemo( ()=> COLUMNS ,[]);
  const hiddenColumns = useMemo( ()=> HiddenColumns ,[]);

  // const hideAbleColumns = useMemo(() => HIDEABLECOLUMNS, []);
  const data = useMemo(() => DATA.appointments, []);
  // console.log("columns",columns)

  // messageService.getMessage().subscribe(res => {
  //   console.log("got status",res.boolean);
  //   if(res.boolean){
  //   updateVisibility(res.boolean);
  //   const allallCOLmns = getTableData(alwaysDisplayedColumns,hideableColumns,precheckColumns);
  //   }
  // });
  // const isPrecheckEnabled = (practiceConfig) =>
  //   _.get(practiceConfig, "precheckSettings.enabled", false);

  // const areDemographicsEnabled = (practiceConfig) =>
  //   !_.get(practiceConfig, "precheckSettings.disableDemographics", true);

  // const isInsuranceEnabled = practiceConfig =>

  //   _.get(practiceConfig, 'precheckSettings.enableInsurance', true);

    const toggleHeaderExpansion = (e) => {
      console.log('toggleHeaderExpansion',e);
      // setExpanded(!expanded);
    };
  
    const toggleColumnsVisibility = (e) => {
      // console.log('toggleColumnsVisibility before',displayAllColumns);
        setDisplayAllColumns(!displayAllColumns);
    };

    useEffect(() => {
      // console.log('toggleColumnsVisibility after',displayAllColumns);
  }, [displayAllColumns]);

  //   const _getPrecheckCol =(practiceConfigData) =>{
  //     let precheckColumn = [];

  //     console.log('getPrecheckCol',practiceConfigData)
  //   if (isPrecheckEnabled(practiceConfigData)) {
  //     // console.log('isPrecheckEnabled')
  //     const columnDefaults = {
  //       className: "precheck-cell",
  //       id: "precheck-header",
  //       resizable: false,
  //       sortable: false,
  //       width: 150
  //     };
    
  //   if (areDemographicsEnabled(practiceConfigData)) {
  //     // console.log('areDemographicsEnabled')
  //     const demographicsColumn = {
  //       ...columnDefaults,
  //       accessor: 'demographic',
  //       Cell: ({ value }) => <label>Demographic</label>,
  //       Header: "Patient info",
  //       id: "demographics"
  //     };
  //     precheckColumn.push(demographicsColumn);
  //   }

  //   if (isInsuranceEnabled(practiceConfigData)) {
  //     const insuranceColumn = {
  //       ...columnDefaults,
  //       accessor: 'insurance',
  //       Cell: ({ value }) => <label>Insurance</label>,
  //       Header: 'Insurance',
  //       id: 'insurance'
  //   };
  //   precheckColumn.push(insuranceColumn);
  //   }
  // }
  //   return precheckColumn
  //   }

    // const getPrecheckCol =memoizeOne(_getPrecheckCol);
    



  // const _getExpanderSetting = (
  //   displayAllColumns,
  //   expanded,
  //   toggleColumnsVisibility,
  //   toggleHeaderExpansion,
    
  // ) =>  ({
  //   expander: true,
  //   Header: () => (
  //       <div>
  //           <span
  //               id="expander_header"
  //               // className={
  //               //     displayAllColumns
  //               //         ? 'mf-icon toggle-columns-visible'
  //               //         : 'mf-icon toggle-columns-hidden'
  //               // }
  //               onClick={toggleColumnsVisibility}
  //           >Collapse</span>
            
  //           {/* <span
  //               id="expand-header"
  //               // className={isHeaderExpanded ? 'mf-icon row-expanded' : 'mf-icon row-collapsed'}
  //               onClick={toggleHeaderExpansion}
  //           >Collapse</span> */}
  //       </div>
  // ),
  // headerClassName: 'expander-header',
	// width: 71,
	// Expander: ({ isExpanded }) => (
	// 	<div className="expand-test">
	// 		<span className={isExpanded ? 'mf-icon row-expanded' : 'mf-icon row-collapsed'} />
	// 	</div>
	// ),
	// sortable: false,
	// resizable: false
  // });



  // const _getTableData =
  // (displayAllColumns,
  //   PracticeConfig)  => {
  //    console.log('params',displayAllColumns)

  //    const _alwaysDisplayedColumns = useMemo( ()=> alwaysDisplayedColumns ,[]);
  //    const _hideableColumns = useMemo( ()=> hideableColumns ,[]);




  //   const tableSettings = displayAllColumns ? [..._alwaysDisplayedColumns, ..._hideableColumns]
  //     : [...alwaysDisplayedColumns];

  //   // if(visibility != ( null || undefined)){
  //   // tableSettings = visibility ? [...alwaysDisplayedColumns,...hideableColumns] : [...alwaysDisplayedColumns];
  //   // tableSettings = visibility ? [...alwaysDisplayedColumns,...hideableColumns] : [...alwaysDisplayedColumns];
  //   // }
  //   // const getExpanderSetting = memoizeOne(
  //   //   _getExpanderSetting(
  //   //     displayAllColumns,
  //   //     expanded,
  //   //     toggleColumnsVisibility,
  //   //     toggleHeaderExpansion,
  //   //   )
  //   // );

  //       const precheckColumn= getPrecheckCol(PracticeConfig);
  //       console.log('precheck col',precheckColumn)
  //   // if (precheckColumn.length !== 0) {
  //   //   // console.log('getExpanderSettings',getExpanderSetting(displayAllColumns,expanded,toggleColumnsVisibility,toggleHeaderExpansion));
  //   //     // tableSettings.push(_getExpanderSetting(displayAllColumns,expanded,toggleColumnsVisibility,toggleHeaderExpansion));
  //   //     const precheckTableSettings = {
  //   //         Header: 'PreCheck',
  //   //         columns: precheckColumn

  //   //     };

  //   //     tableSettings.push(precheckTableSettings);

  //   // }

  //   console.log('table Setting',tableSettings)

  //   return tableSettings;
    
  // };


  // allCOLmns = getTableData(
  //   alwaysDisplayedColumns,
  //   hideableColumns,
  //   precheckColumns
  // );
  // const allcolsss = useMemo( ()=> JSON.parse() ,[])

  // console.log("get All columns", allCOLmns);

  // console.log("final status",hideToggleCols());

  //   const tableInstance = useTable({allCOLmns,data})

  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     headerGroups,
  //     rows,
  //     prepareRow,
  //   } = tableInstance

  //   console.log("data",tableInstance);

  const _tableHooks = (hooks) =>{
    hooks.visibleColumns.push(columns =>[
      ...columns,
      {
      id: 'hideColumn',
      Header : () => { return <button value={displayAllColumns} onClick={(e)=>toggleColumnsVisibility(e)}>{displayAllColumns ? '<-': '->'}</button> },
      },
      {
        id: "expander",
        Header: ">",
        accessor:(appointment)=> {console.log("appointment",appointment);return 'column1'},
        Cell: ({row}) =>
        // !props.row.canExpand ?
        //   <div>
        //   <p>{props.value}</p>
    
        //   <a
        //     {...props.row.getToggleRowExpandedProps({})}
        //   >
        //   {'>'}
        //   </a>
        // </div> 

 
      <span onClick={(e)=>renderRowSubComponent(e)}  {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        },
    ]);

    hooks.visibleColumns.push(visibleCols=>{
      // console.log('visibleCols',visibleCols);
      let firstHalf ;
      let hider;
      let secondHalf;
      if(visibleCols.length > 12){
        firstHalf= visibleCols.slice(0,6)
        // console.log('firstHalf',firstHalf);
        hider=visibleCols.slice(14,16);
        secondHalf=visibleCols.slice(6,14)
        // console.log('secondHalf',secondHalf);
  
        // console.log('hider',hider);
      }else{

        firstHalf= visibleCols.slice(0,2)
        // console.log('firstHalf',firstHalf);
        hider=visibleCols.slice(10,12);
        secondHalf=visibleCols.slice(2,10)
        // console.log('secondHalf',secondHalf);
        // console.log('hider',hider)
      }
     

      

      return[...firstHalf,...hider,...secondHalf]
    })
  }

  const tableHooks=memoizeOne(_tableHooks);


  const tableInstance = useTable(
    {
      columns: displayAllColumns ? columns : hiddenColumns
      // getTableData(
      //   toggleHeaderExpansion,
      //   toggleColumnsVisibility,
      //   expanded,
      //   displayAllColumns,
      //   PracticeConfig
      // )
      ,
      data
    },
    useColumnOrder,
    useExpanded,
    useRowSelect,
    tableHooks
    // (hooks) => {
    //   console.log("hooks", hooks.visibleColumns);
    //   hooks.visibleColumns.push((columns) => {
    //     console.log("column RS", columns);
    //     return [
    //       //   {
    //       //     Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
    //       //       console.log('isAllRowsExpanded',isAllRowsExpanded,getToggleAllRowsExpandedProps()),
    //       //       <span {...getToggleAllRowsExpandedProps()}>
    //       //         {isAllRowsExpanded ? '👇' : '👉'}
    //       //       </span>
    //       //     ),
    //       //     Cell: ({ row }) =>
    //       //       // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
    //       //       // to build the toggle for expanding a row
    //       //       row.canExpand ? (
    //       //         <span
    //       //           {...row.getToggleRowExpandedProps({
    //       //             style: {
    //       //               // We can even use the row.depth property
    //       //               // and paddingLeft to indicate the depth
    //       //               // of the row
    //       //               paddingLeft: `${row.depth * 2}rem`,
    //       //             },
    //       //           })}
    //       //         >
    //       //           {row.isExpanded ? '👇' : '👉'}
    //       //         </span>
    //       //       ) : null,
    //       //     // <Checkbox {...row.getToggleRowSelectedProps()} />
    //       //   },
    //   //     {
    //   //       expander: true,
    //   //       Header: () => (
    //   //           <div>
    //   //               <span
    //   //                   id="expander_header"
    //   //                   // className={
    //   //                   //     displayAllColumns
    //   //                   //         ? 'mf-icon toggle-columns-visible'
    //   //                   //         : 'mf-icon toggle-columns-hidden'
    //   //                   // }
    //   //                   onClick={toggleColumnsVisibility}
    //   //               >Collapse</span>
                    
    //   //               {/* <span
    //   //                   id="expand-header"
    //   //                   // className={isHeaderExpanded ? 'mf-icon row-expanded' : 'mf-icon row-collapsed'}
    //   //                   onClick={toggleHeaderExpansion}
    //   //               >Collapse</span> */}
    //   //           </div>
    //   //     ),
    //   //     headerClassName: 'expander-header',
    //   //     width: 71,
    //   //     Expander: ({ isExpanded }) => (
    //   //       <div className="expand-test">
    //   //         <span className={isExpanded ? 'mf-icon row-expanded' : 'mf-icon row-collapsed'} />
    //   //       </div>
    //   //     ),
    //   //     sortable: false,
    //   //     resizable: false
    //   //     },
    //       ...columns
    //     ];
    //   });

    //     // console.log("column RS after", hooks.visibleColumns);

    // }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded },
    allColumns,
    allRows,
    visibleColumns,
    setColumnOrder,
    getToggleHideAllColumnsProps
  } = tableInstance;

  // console.log("datajson",COLUMNS , Data)
  const renderRowSubComponent = (row)=>{
    console.log('expanded row',row)
    // const subrows=row.values;
    // console.log('subrows',subrows);
    // row.subRows=subrows
    // return row
  }

  const changeOrder = () => {



    columns.map(col => {
      const orderCols=[];
      if(col.columns){
        col.columns.map(c=>{
          // console.log('col.columns',c.id);
          orderCols.push(c);
        })   
      }else{
        // console.log("col",col.id);  
        orderCols.push(col)
      }

      orderCols.map(ordered=>{
        // console.log('ordered',ordered);
      })

      // setColumnOrder(orderCols)
     

    }
  );
    // setColumnOrder([
    //   "patient_name",
    //   "patient_id",
    //   "provider",
    //   "location",
    //   "email",
    //   "phone",
    //   "expander",
    //   "patient_info_id",
    //   "insurance_id",
    //   "copay_id",
    //   "balance_id",
    //   "emailid1",
    //   "textid1",
    //   "emailid2",
    //   "textid2"
    // ]);
  };

    // useEffect(() => {
    //   setColumnOrder(["patient_name","patient_id","provider","location","email","phone","expander","patient_info_id","insurance_id","copay_id","balance_id"]);
    //   //   return () => {
    //   //       cleanup
    //   //   }
    // }, [columns])

  return (
    <>
    <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
      <div>
        {allColumns.map(
          (column) =>
           <div>
           {/* <label key={column.id }> */}
           {/* <Checkbox {...column.getToggleHiddenProps()} />{column.Header} */}
           {/* <Button {...column.getToggleHiddenProps()} />{column.Header} */}
          {/* </label> */}
          </div>
        )}

        {
          // console.log('allRows',rows),
          // rows.map(row=>{
          //   row.subRows=  [{
          //     "providerName": "abc",
          //     "patient_id": 24248,
          //     "provider": "Provd 1",
          //     "email" : "xyz.gmail.com"
          //   }]
            
          //   console.log('subrow',row)
          // })
        }
      </div>
      <button onClick={changeOrder}>Change Col order</button>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            // console.log('rowsssssss',rows),
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                // !row.isExpanded ?
                <React.Fragment>
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr> 
                {/* {row.isExpanded ? (
                  <tr {...row.getToggleRowExpandedProps()}>
                  {
                    // Loop over the rows cells
                    row.subRows.map((cell) => {
                      // Apply the cell props
                      // return (
                        console.log('cell',cell)
                        // <td>
                        //   {
                        //     // Render the cell contents
                        //     cell.render("Cell")
                        //   }
                        // </td>
                      // );
                    })
                  }
                </tr> 
                ) : null} */}
                </React.Fragment>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default HidingCols;
