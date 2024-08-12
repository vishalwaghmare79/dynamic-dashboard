import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/actions'; 

const AddNewWidgetForm = ({ category, onClose }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && content) {
      const newWidget = { id: Date.now(), name, content };
      dispatch(addWidget(category, newWidget));
      onClose();
    }
  };

  return (
    <div className="modal">
      <h2>Add New Widget</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Widget Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Content:
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Add Widget</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddNewWidgetForm;
