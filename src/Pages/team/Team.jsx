import React from 'react'
import "./team.css";
import { DataGrid } from '@mui/x-data-grid';

const Team = () => {

    const columns = [
        { field: 'id', headerName: 'ID', },
        {
            field: 'name', headerName: 'Name', flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: 'age', headerName: 'Age', type: "number",
            headerAlign: "left", align: "left",
        },
        {
            field: 'phone', headerName: 'Phone Number', type: "number",
            flex: 1,
        },
        {
            field: 'email', headerName: 'Email',
            flex: 1,
        },
        {
            field: 'Access', headerName: 'Access Level', flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <button style={{
                        width: "60%", m: "0 auto",
                        p: "4px", display: "flex", justifyContent: "center",
                        backgroundColor: "lightgreen", borderRadius: "5px", border: "none",
                    }} >
                        Access
                    </button>
                )
            }
        },
    ];

    const rows = [
        { id: 1, name: 'Snow Jon', age: 35, phone: "0909090909", email: "hissam@gmail.com" },
        { id: 2, name: 'Lannister Cersei', age: 42, phone: "0909090909", email: "hissam@gmail.com" },
        { id: 3, name: 'Lannister Jaime', age: 45, phone: "0909090909", email: "hissam@gmail.com" },
        { id: 4, name: 'Stark Arya', age: 16, phone: "0909090909", email: "hissam@gmail.com" },
        { id: 5, name: 'Targaryen Daenerys', age: 21, phone: "0909090909", email: "hissam@gmail.com" },
        { id: 6, name: 'Melisandre null', age: 150, phone: "0909090909", email: "hissam@gmail.com" },
        { id: 7, name: 'Clifford Ferrara', age: 44, phone: "0909090909", email: "hissam@gmail.com" },
        { id: 8, name: 'Frances Rossini', age: 36, phone: "0909090909", email: "hissam@gmail.com" },
        { id: 9, name: 'Roxie Harvey', age: 65, phone: "0909090909", email: "hissam@gmail.com" },
    ];


    return (
        <div className='team'>
            <div className="team-container">
                <h3>TEAM</h3>
                <span className="team-desc">Managing the team members</span>
                <div className="table " >
                    <DataGrid style={{
                        color: "rgb(190, 190, 190)", backgroundColor: "#091120", fontSize: "12px",
                        border: "none", borderBottom: "none",
                        backgroundColor: "",
                    }}
                        rows={rows}
                        columns={columns}
                        pageSize={15}
                        rowsPerPageOptions={[10]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Team
