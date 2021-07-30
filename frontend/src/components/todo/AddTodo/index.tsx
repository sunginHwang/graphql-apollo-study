import React from 'react';
import {useMutation} from "@apollo/client";
import {ADD_TODO} from "../../../graphqls/todo";

let input: any = '';

function AddTodo() {

    const [addTodo, {data, loading, error}] = useMutation(ADD_TODO);

    if (loading) return <div>'Submitting...'</div>;
    if (error) return <div>`Submission error! ${error.message}`</div>;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    console.log(input.value);
                    addTodo({variables: {text: input.value}});
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;