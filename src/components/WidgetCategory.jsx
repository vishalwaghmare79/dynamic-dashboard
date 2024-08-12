import React from 'react';
import Widget from './Widget';

const WidgetCategory = ({ title, widgets, onAddWidgetClick }) => {
  const visibleWidgets = widgets.filter(widget => widget.visible !== false);

  return (
    <div className="widget-category">
      <h2>{title}</h2>
      <div className="widgets">
        {visibleWidgets.length ? (
          visibleWidgets.map(widget => (
            <Widget key={widget.id} {...widget} category={title} />
          ))
        ) : (
          <p>No widgets available</p>
        )}
        <div 
          className="widget add-widget-item"
          onClick={() => onAddWidgetClick(title)}
        >
          <h3>➕</h3>
        </div>
      </div>
    </div>
  );
};

export default WidgetCategory;
