import React, { useState } from "react";
import Modal from "./common/Modal";
import FormsTable from "./FormsTable/formsTable";

const CreateWebForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div>
                <button type="button" class="btn btn-primary btn-sm mt-3 mb-3" onClick={() => setIsOpen(true)}>Add New Form</button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    Fancy Popup
                </Modal>
                <FormsTable />
                <button type="button" class="btn btn-primary btn-sm mt-3">Submit Form</button>
            </div>

        </>
    );
}

export default CreateWebForm;