import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWidgetVisibility } from '../redux/actions';

const AddWidgetModal = ({ onClose }) => {
  const [category, setCategory] = useState('');
  const [selectedWidgets, setSelectedWidgets] = useState({}); 

  const dispatch = useDispatch();
  const widgets = useSelector(state => state);
  const categories = Object.keys(widgets);

  useEffect(() => {
    if (category) {
      const initialSelection = (widgets[category] || []).reduce((acc, widget) => {
        acc[widget.id] = widget.visible !== false;
        return acc;
      }, {});
      setSelectedWidgets(initialSelection);
    } else {
      setSelectedWidgets({});
    }
  }, [category, widgets]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCheckboxChange = (id) => {
    setSelectedWidgets(prevState => ({
      ...prevState,
      [id]: !prevState[id] 
    }));
  };

  const handleConfirm = () => {
    Object.keys(selectedWidgets).forEach(id => {
      dispatch(updateWidgetVisibility(category, parseInt(id, 10), selectedWidgets[id]));
    });
    onClose();
  };
  
  return (
    <div className="modal">
      <h2>Add Widgets</h2>
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Select category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <div className="widget-list">
        {(widgets[category] || []).map(widget => (
          <div key={widget.id} className="widget-item">
            <input 
              type="checkbox" 
              checked={selectedWidgets[widget.id] || false} 
              onChange={() => handleCheckboxChange(widget.id)} 
            />
            <label>{widget.name}</label>
          </div>
        ))}
      </div>

      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddWidgetModal;
