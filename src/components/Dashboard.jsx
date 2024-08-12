import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WidgetCategory from './WidgetCategory';
import AddWidgetModal from './AddWidgetModal';
import AddNewWidgetForm from './AddNewWidgetForm';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const widgets = useSelector(state => state);

  const filteredWidgets = (category) => {
    return (widgets[category] || [])
      .filter(widget =>
        widget.visible !== false && 
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  const handleAddWidgetClick = (category) => {
    setSelectedCategory(category);
    setShowForm(true);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <input 
        type="text" 
        placeholder="Search widgets..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <button className='add-widgets-btn' onClick={() => setShowModal(true)}>Add Widgets</button>
      {Object.keys(widgets).map(category => (
        <WidgetCategory 
          key={category} 
          title={category} 
          widgets={filteredWidgets(category)} 
          onAddWidgetClick={() => handleAddWidgetClick(category)}
        />
      ))}
      {showModal && <AddWidgetModal onClose={() => setShowModal(false)} />}
      {showForm && selectedCategory && (
        <AddNewWidgetForm 
          category={selectedCategory} 
          onClose={() => setShowForm(false)} 
        />
      )}
    </div>
  );
};

export default Dashboard;
