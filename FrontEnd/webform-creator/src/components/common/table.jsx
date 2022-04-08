import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (columns) => {
    <table className="table table-striped">
        <TableHeader columns={columns} />
    </table>
}

export default Table;