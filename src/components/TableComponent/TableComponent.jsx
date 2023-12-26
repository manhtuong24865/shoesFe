import { Table } from 'antd';
import React, { useMemo, useState } from 'react'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { Excel } from 'antd-table-saveas-excel';



const TableComponent = (props) => {
    const { selectionType = 'checkbox', data: dataSource = [], isPending = false, columns = [], handleDeleteMany } = props
    const [rowSelectedKeys, setRowSelectedKeys] = useState([])
    const newColumnExport = useMemo(() => {
        const arr = columns?.filter((col) => col.dataIndex !== 'action')
        return arr
    }, [columns])

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setRowSelectedKeys(selectedRowKeys)
        },
        // getCheckboxProps: (record) => ({
        //     disabled: record.name === 'Disabled User',
        //     // Column configuration not to be checked
        //     name: record.name,
        // }),
    };

    const handleDeleteAll = () => {
        handleDeleteMany(rowSelectedKeys)
    }

    const exportExcel = () => {
        const excel = new Excel();
        excel
            .addSheet("test")
            .addColumns(newColumnExport)
            .addDataSource(dataSource, {
                str2Percent: true
            })
            .saveAs("Excel.xlsx");
    };


    return (
        <LoadingComponent isPending={isPending}>
            {rowSelectedKeys.length > 0 && (
                <div style={{ background: '#d03434', color: '#fff', fontWeight: 'bold', padding: '10px', cursor: 'pointer' }}
                    onClick={handleDeleteAll} >
                    Xóa tất cả </div>
            )}
            <button onClick={exportExcel}>Export Excel</button>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={dataSource}
                {...props}
            />
        </LoadingComponent>
    )
}
export default TableComponent
