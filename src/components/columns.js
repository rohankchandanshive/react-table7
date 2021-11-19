import iconPending from '../components/img/icon-pending.svg';
import React, { useState } from 'react'
// import iconComplete from '../components/img/icon-desktop.svg';
// import iconChanged from '../components/img/icon-add.svg';
import Copay from './Copay';
import Insurance from './Insurance';
import {ColumnFilter} from './ColumnFilter';
import PracticeConfig from "../practiceConfigData.json";



// import {SelectColumnFilter} from './ColumnFilter'


// export const HideableColumns=[
//   {
//     Header: 'Provider',
//     id: 'provider',
//     accessor: (appointment)=> { return appointment.providerName},
//     // Filter: ColumnFilter
//   },
//   {
//     Header: 'Location',
//     id: 'location',
//     accessor: 'locationName',
//     // Filter: ColumnFilter
//   },
//   {
//     Header: 'Email',
//     id: 'email',
//     accessor:(appointment)=> {console.log("email",appointment.patientDemographics.email );return appointment.patientDemographics.email },
//     disableFilters: true
//   },
//   {
//     Header: 'Phone',
//     id: 'phone',
//     accessor:(appointment)=> { return appointment.patientDemographics.phone},
//     disableFilters: true
//   },
// ]

  const checkColumnEnable = (value) =>{
    console.log('PracticeConfig',PracticeConfig);
    console.log('checkColumnEnable',value.precheckSettings.enabled);
    value.precheckSettings.enabled ?  localStorage.setItem('mfProvisioningDisplayAllColumns',true) : localStorage.setItem('mfProvisioningDisplayAllColumns',false);
  }





export const COLUMNS =[
      {
        Header: 'Patient Name',
        id: 'patient_name',
        accessor: 'providerName',
        // Cell: (props) =>{
        //   console.log('props1',props)
        // return 'patient_name'
        // }
        // ,
        isVisible: true,
        Filter: ColumnFilter
      },
      {
        Header: 'Patient ID',
        id: 'patient_id',
        accessor: 'practiceId',
        isVisible: true,
        Filter: ColumnFilter
      },
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
      {
        Header: 'PreCheck',
        id: 'precheck',
        disableFilters: true,
        isVisible: PracticeConfig.precheckSettings.enabled,
        // subRows:[ ],
        // accessor: (appointment)=>{ checkColumnEnable(PracticeConfig)},
        columns: [
          {
            Header: 'Patient info',
            id: 'patient_info_id',
            // accessor:(appointment)=>{ checkColumnEnable(PracticeConfig)},
            accessor:(appointment)=>{return appointment.insuranceInfo.insuranceList.editStatus},
            disableFilters: true,
            isVisible: PracticeConfig.precheckSettings.enabled,
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
            accessor:(appointment)=> { return appointment.insuranceInfo.insuranceList},
            disableFilters: true,
            isVisible: PracticeConfig.precheckSettings.enabled,
            Cell: (appointment) => <Insurance value={appointment} />
          },
          {
            Header: 'Copay',
            id: 'copay_id',
            accessor:(appointment)=> { return appointment.copayAmount},
            disableFilters: true,
            isVisible: PracticeConfig.precheckSettings.enabled,
            Cell:(appointment)=>(
              <Copay value={appointment} />
            )
          },
          {
            Header: 'Balance',
            id: 'balance_id',
            accessor:(appointment)=> { return appointment.balanceAmount},
            disableFilters: true,
            isVisible: PracticeConfig.precheckSettings.enabled,
            Cell:(appointment)=>(
              <Copay value={appointment} />
            )
          }
        ],
      },
      {
        Header: 'Reminders',
        id: 'reminders',
        disableFilters: true,
        isVisible: true,
        columns:[
          {
            Header: 'Emails',
            id:"emailid1",
            disableFilters: true,
            isVisible: true,
            accessor:(appointment)=> { return appointment.emailReminderCount.cadenceCount}
          },
          {
            Header: 'Texts',
            id:"textid1",
            disableFilters: true,
            isVisible: true,
            accessor:(appointment)=> { return appointment.textReminderCount.cadenceCount}
          },
        ]
      },
      {
        Header: 'Broadcasts',
        id: 'broadcasts',
        disableFilters: true,
        isVisible: true,
        columns: [
          {
            Header: 'Emails',
            id:"emailid2",
            disableFilters: true,
            isVisible: true,
            accessor: (appointment)=> { return appointment.broadcastMessageDetails.emailCount}
          },
          {
            Header: 'Texts',
            id:"textid2",
            disableFilters: true,
            isVisible: true,
            accessor: (appointment)=> { return appointment.broadcastMessageDetails.textCount}
          }
        ]
      }

 ]

 export const HiddenColumns =[
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
  },
  {
    Header: 'PreCheck',
    id: 'precheck',
    disableFilters: true,
    isVisible: PracticeConfig.precheckSettings.enabled,
    // accessor: (appointment)=>{ checkColumnEnable(PracticeConfig)},
    columns: [
      {
        Header: 'Patient info',
        id: 'patient_info_id',
        // accessor:(appointment)=>{ checkColumnEnable(PracticeConfig)},
        accessor:(appointment)=>{return appointment.insuranceInfo.insuranceList.editStatus},
        disableFilters: true,
        isVisible: PracticeConfig.precheckSettings.enabled,
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
        accessor:(appointment)=> { console.log("test",appointment);  return appointment.insuranceInfo.insuranceList},
        disableFilters: true,
        isVisible: PracticeConfig.precheckSettings.enabled,
        Cell: (appointment) => <Insurance value={appointment} />
      },
      {
        Header: 'Copay',
        id: 'copay_id',
        accessor:(appointment)=> { return appointment.copayAmount},
        disableFilters: true,
        isVisible: PracticeConfig.precheckSettings.enabled,
        Cell:(appointment)=>(
          <Copay value={appointment} />
        )
      },
      {
        Header: 'Balance',
        id: 'balance_id',
        accessor:(appointment)=> { return appointment.balanceAmount},
        disableFilters: true,
        isVisible: PracticeConfig.precheckSettings.enabled,
        Cell:(appointment)=>(
          <Copay value={appointment} />
        )
      }
    ]
  },
  {
    Header: 'Reminders',
    id: 'reminders',
    disableFilters: true,
    isVisible: true,
    columns:[
      {
        Header: 'Emails',
        id:"emailid1",
        disableFilters: true,
        isVisible: true,
        accessor:(appointment)=> { return appointment.emailReminderCount.cadenceCount}
      },
      {
        Header: 'Texts',
        id:"textid1",
        disableFilters: true,
        isVisible: true,
        accessor:(appointment)=> { return appointment.textReminderCount.cadenceCount}
      },
    ]
  },
  {
    Header: 'Broadcasts',
    id: 'broadcasts',
    disableFilters: true,
    isVisible: true,
    columns: [
      {
        Header: 'Emails',
        id:"emailid2",
        disableFilters: true,
        isVisible: true,
        accessor: (appointment)=> { return appointment.broadcastMessageDetails.emailCount}
      },
      {
        Header: 'Texts',
        id:"textid2",
        disableFilters: true,
        isVisible: true,
        accessor: (appointment)=> { return appointment.broadcastMessageDetails.textCount}
      }
    ]
  }

]


//  export const HIDEABLECOLUMNS=[{
//   Header: 'Broadcasts',
//   id: 'broadcast',
//   disableFilters: true,
//   isVisible: true,
//   columns: [
//     {
//       Header: 'Emails',
//       id:"emailid2",
//       disableFilters: true,
//       isVisible: true,
//       accessor: (appointment)=> { return appointment.broadcastMessageDetails.emailCount}
//     },
//     {
//       Header: 'Texts',
//       id:"textid2",
//       disableFilters: true,
//       isVisible: true,
//       accessor: (appointment)=> { return appointment.broadcastMessageDetails.textCount}
//     }
//   ]
// }
//  ]
    