import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { inputOptions } from "./inputOptions.js";
import * as AiIcons from 'react-icons/ai';
import { postWebform } from "../../utils/postWebform.js";
import FormsTable from "../FormsTable/formsTable";

function CreateWebForm() {
    const { register, handleSubmit } = useForm();
    const { register: register2,
        handleSubmit: handleSubmit2 } = useForm();
    const [fields, setFields] = useState([]);

    function handleNewField(data) {
        const updateFields = [
            ...fields,

            {
                fieldId: fields.length + 1,
                label: data.label,
                type: data.inputFieldType,
                isRequired: data.isRequired
            }
        ];

        setFields(updateFields);
    }

    async function handleWebformSubmit(data) {
        const webform = {
            author: "62589fb0b40ed680c2b62168",
            title: data.title,
            body: data.description,
            elements: [
                ...fields
            ]
        }
        await postWebform(webform);
    }

    return (
        /*This entire form should be its own component, 
        handleSubmit function should be here inside of CreateWebForm() 
        and it should be passed down as a prop to this form component*/
        <>
            <form onSubmit={handleSubmit((data) => {
                handleNewField(data);
                console.log(fields);
            })}>
                <div className="form-group" >
                    <label>Choose a label for your field: </label>
                    <input {...register("label")} placeholder="Label" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Select Input Field Type: </label>
                    <select {...register("inputFieldType")} id="inputFieldType" name="inputFieldType" className='form-control'>
                        {inputOptions.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="form-check">
                    <label>Is this field required?</label>
                    <input {...register("isRequired")} type="checkbox" className="form-check-input" id="exampleCheck1" />
                </div>
                <button type="submit" className="btn btn-primary">Add Field</button>

            </form>
            <div className="form_style">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Label</th>
                            <th scope="col">Type</th>
                            <th scope="col">Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((item) => (
                            <tr key={item.fieldId}>
                                <th scope="row">{item.label}</th>
                                <th scope="row">{item.type}</th>
                                <th scope="row">{item.isRequired ? <AiIcons.AiOutlineLike /> : <AiIcons.AiOutlineDislike />}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleSubmit2((data) => {
                handleWebformSubmit(data);
            })}>
                <div className="form-group" >
                    <label>Enter a title for your webform: </label>
                    <input {...register2("title")} placeholder="Title" className="form-control" />
                </div>
                <div className="form-group" >
                    <label>Give your webform a description: </label>
                    <input {...register2("description")} placeholder="Description" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Create New Webform</button>
            </form>


        </>
    )
}

export default CreateWebForm;