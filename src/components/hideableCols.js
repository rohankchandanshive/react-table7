import PracticeConfig from "../practiceConfigData.json";

import iconPending from '../components/img/icon-pending.svg';
// import iconComplete from '../components/img/icon-desktop.svg';
// import iconChanged from '../components/img/icon-add.svg';
import Copay from './Copay';
import {ColumnFilter} from './ColumnFilter';
import Insurance from './Insurance';
import ToggleHideCol from './Button';
import React, { useState } from 'react'

// import HidingCols from './HidingCols'

import { Subject } from 'rxjs';
 




export const alwaysDisplayedColumns = [
	{
        Header: 'Patient Name',
        id: 'patient_name',
        accessor: 'providerName',
        isVisible: true,
        Filter: ColumnFilter
      },
      {
        Header: 'Patient ID',
        id: 'patient_id',
        accessor: 'practiceId',
        isVisible: true,
        Filter: ColumnFilter
      }
]
export const hideableColumns = [
	{
        Header: 'Provider',
        id: 'provider',
        className:'hideable',
        accessor: (appointment)=> { return appointment.providerName},
        isVisible: PracticeConfig.precheckSettings.enabled,
        Filter: ColumnFilter
      },
      {
        Header: 'Location',
        id: 'location',
        className:'hideable',
        accessor: 'locationName',
        isVisible: PracticeConfig.precheckSettings.enabled,
        Filter: ColumnFilter
      },
      {
        Header: 'Email',
        id: 'email',
        className:'hideable',
        accessor:(appointment)=> {console.log("email",appointment.patientDemographics.email );return appointment.patientDemographics.email },
        disableFilters: true,
        isVisible: PracticeConfig.precheckSettings.enabled
      },
      {
        Header: 'Phone',
        id: 'phone',
        className:'hideable',
        accessor:(appointment)=> { return appointment.patientDemographics.phone},
        Aggregated: ({ value }) => {  
          console.log("values",value);
        },
        disableFilters: true,
        isVisible: PracticeConfig.precheckSettings.enabled
      },
];
const subject = new Subject();

export const messageService = {
    
    sendMessage: visible => subject.next({ boolean: visible }),
    getMessage: () => subject.asObservable()
};

// const subject2 = new Subject();
// export const messageService1 = {
    
//     sendState: visible => subject2.next({ boolean: visible }),
//     getState: () => subject2.asObservable()
// };

let result;


export const  hideToggleCols=(e)=>{
    // console.log("status",result , e);
    if(result === ( null || undefined) )
    {
      result = true
    }
    console.log("status",result);
    result = result ? false : true ;
    console.log('hiding',result);
    e.target.value = result;
    // messageService.sendMessage(result);
    return result ;
    // messageService.sendMessage()
}





export const precheckColumns=[
    {
        Header: () => <input type='button' value={result} onClick={(e)=>hideToggleCols(e)} />,
        id: 'hider',
        // className:'hideable',
        // accessor: (appointment)=> { return appointment.providerName},
        isVisible: PracticeConfig.precheckSettings.enabled,
        // Filter: ColumnFilter
      },
      // {
      //   id: 'precheck_expander', // Make sure it has an ID
      //   Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
      //     console.log('expander ',isAllRowsExpanded),
      //     <span {...getToggleAllRowsExpandedProps()}>
      //       {isAllRowsExpanded ? '👇' : '👉'}
      //     </span>
      //   ),
      //   Cell: ({ row }) =>
      //     // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
      //     // to build the toggle for expanding a row
      //     row.canExpand ? (
      //       <span
      //         {...row.getToggleRowExpandedProps({
      //           // style: {
      //           //   // We can even use the row.depth property
      //           //   // and paddingLeft to indicate the depth
      //           //   // of the row
      //           //   paddingLeft: `${row.depth * 2}rem`,
      //           // },
      //         })}
      //       >
      //         {row.isExpanded ? '👇' : '👉'}
      //       </span>
      //     ) : null,
      //   // className:'hideable',
      //   // accessor: (appointment)=> { return appointment.providerName},
      //   isVisible: PracticeConfig.precheckSettings.enabled,
      //   // Filter: ColumnFilter
      // },
    {
        Header: 'Patient info',
        id: 'patient_info_id',
        accessor:(appointment)=>{ return appointment.insuranceInfo.insuranceList.editStatus},
        disableFilters: true,
        isVisible: true,
        Cell: (appointment) => (
          <img
            src={iconPending}
            width={10}
            alt='Player'
          />
        )
      },
      {
        Header: 'Insurance',
        id: 'insurance_id',
        accessor:(appointment)=> {return appointment.insuranceInfo.insuranceList},
        disableFilters: true,
        isVisible: true,
        Cell: (appointment) => <Insurance value={appointment} />
      },
      {
        Header: 'Copay',
        id: 'copay_id',
        accessor:(appointment)=> { return appointment.copayAmount},
        disableFilters: true,
        isVisible: true,
        Cell:(appointment)=>(
          <Copay value={appointment} />
        )
      },
      {
        Header: 'Balance',
        id: 'balance_id',
        accessor:(appointment)=> { return appointment.balanceAmount},
        disableFilters: true,
        isVisible: true,
        Cell:(appointment)=>(
          <Copay value={appointment} />
        )
      }
]