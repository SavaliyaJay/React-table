import React, { useMemo } from "react";
// import { useTable } from './../../node_modules/react-table/src/hooks/useTable';
import MOCK_DATA from '../apiData/MOCK_DATA.json'
import { COLUMNS } from '../apiData/colums';
import { useTable } from "react-table";
// import { render } from '@testing-library/react';


const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data,
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;
    return (
        <table {...getTableProps()} class="table table-striped-columns rounded ">
            <thead className="sticky-top">
                {
                    headerGroups.map((headerGroups) => (
                        <tr  {...headerGroups.getHeaderGroupProps()}>
                            {
                                headerGroups.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {
                                            column.render('Header')
                                        }
                                    </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                })}
                        </tr>
                        )
                    })
                }
               
            </tbody>
        </table>
    )
}

export default BasicTable