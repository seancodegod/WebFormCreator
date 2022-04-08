import Table from "../common/table";
import React from "react";
import "./formsTable.css";

const FormsTable = () => {
    return (
        <div class="form_style">
            <table class="table table-striped">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Required</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <th scope="row">Text</th>
                        <th scope="row">Yes</th>
                    </tr>
                    <tr>
                        <th scope="row">State</th>
                        <th scope="row">Dropdown</th>
                        <th scope="row">No</th>
                    </tr>
                    <tr>
                        <th scope="row">Birthday</th>
                        <th scope="row">Birthday</th>
                        <th scope="row">Yes</th>
                    </tr>
                    <tr>
                        <th scope="row">Phone Number</th>
                        <th scope="row">Phone</th>
                        <th scope="row">No</th>
                    </tr>
                    <tr>
                        <th scope="row">Address</th>
                        <th scope="row">Text</th>
                        <th scope="row">Yes</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormsTable;