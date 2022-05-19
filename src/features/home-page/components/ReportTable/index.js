import {faFileExcel} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button, Table} from 'antd'
import 'antd/dist/antd.min.css'
import qs from 'qs'
import React, {useEffect, useReducer} from 'react'
import axiosClient from '~/api/axiosClient'
import EntrySelect from '~/components/EntrySelect'
import SCReportTable from './SC.ReportTable'

const getRandomUserParams = params => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
})

function ReportTable () {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10,
      },
      sortedInfo: {},
      loading: false,
    }, undefined,
  )
  const {data, pagination, sortedInfo, loading} = state
  const entryOptions = [10, 20, 50]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name.first} ${name.last}`,
      sortOrder: sortedInfo.field === 'name' && sortedInfo.order,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: true,
      sortOrder: sortedInfo.field === 'gender' && sortedInfo.order,
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ]

  useEffect(() => {
    fetch({pagination})
  }, [pagination.pageSize])

  const handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter)
    setState({sortedInfo: sorter})
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    })
  }

  function fetch (params = {}) {
    setState({loading: true})
    console.log(params.pagination.pageSize)
    axiosClient.get(
      `https://randomuser.me/api?${qs.stringify(getRandomUserParams(params))}`)
      .then(data => {
        console.log(data)
        setState({
          loading: false,
          data: data.results,
          pagination: {
            ...params.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        })
      })
  }

  function handleEntryChange (value) {
    setState({
      sortedInfo: {},
      pagination: {...pagination, pageSize: value},
    })
  }

  return (
    <SCReportTable>
      <div className='Title'>All Reported Users</div>
      <div className='TopItem'>
      <EntrySelect
        defaultValue={pagination.pageSize}
        onChange={handleEntryChange}
        entryOptions={entryOptions}
      />
        <Button
          className='ExportBtn'
          type="primary"
          icon={<FontAwesomeIcon icon={faFileExcel} />}
          size='large'
        >
          Export
        </Button>
      </div>
      <Table
        bordered
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </SCReportTable>
  )
}

export default ReportTable