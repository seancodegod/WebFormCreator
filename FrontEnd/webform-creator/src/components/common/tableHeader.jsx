import React from "react";

const TableHeader = (columns) => {
    <thead>
        <tr>
            {columns.map((column) => (
                <th key={column.key} >
                    <div className="th-parent">
                        <div className="th-left">{column.label}</div>
                    </div></th>
            ))}
        </tr>
    </thead>
}

export default TableHeader;