import React from "react";
import { useInput } from "./hooks/input";

const ModalForm = (props) => {

    const {value, bind, reset } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting Name ${value}`);
        reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text"
                    {...bind}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ModalForm;