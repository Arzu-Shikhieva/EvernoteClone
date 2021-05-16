import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNote, updateNote} from "../store/actions/noteAction";
import useInput from "../customhook/useInput";
import {useHistory} from 'react-router-dom';

function EditForm() {
    const note = useSelector((state) => state.note)

    const [title, bindTitle, resetTitle] = useInput(note.title);
    const [content, bindContent, resetContent] = useInput(note.content);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateNote({id: note.id, title, content}));
        resetTitle()
        resetContent()
        history.push('/')
    }

    return (
        <div className='section'>
            <form onSubmit={handleSubmit} className='white'>
                <h5 className="grey-text tex-darken-3">New Note</h5>

                <div className="input-field">
                    <input id="note_title" type="text" className="validate" {...bindTitle} />
                    <label htmlFor="note_title" className='active'>Note Title</label>
                </div>
                <div className='input-field'>
                    <textarea id="note_content" className="materialize-textarea" {...bindContent} ></textarea>
                    <label htmlFor="note_content" className='active'>Note Content</label>
                </div>
                <button className='btn green'>Update</button>
            </form>
        </div>
    );
}

export default EditForm;