import { ADD_WIDGET, REMOVE_WIDGET, UPDATE_WIDGET_VISIBILITY } from './actions';
import initialWidgets from './widgets.json';

const widgetsReducer = (state = initialWidgets, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      const { category, widget } = action.payload;
      return {
        ...state,
        [category]: [...(state[category] || []), widget],
      };

    case REMOVE_WIDGET:
      const { id } = action.payload;
      return {
        ...state,
        [action.payload.category]: state[action.payload.category].filter(widget => widget.id !== id),
      };

    case UPDATE_WIDGET_VISIBILITY:
      const { id: widgetId, category: updateCategory, isVisible } = action.payload;
      return {
        ...state,
        [updateCategory]: state[updateCategory].map(widget =>
          widget.id === widgetId ? { ...widget, visible: isVisible } : widget
        ),
      };

    default:
      return state;
  }
};

export default widgetsReducer;
