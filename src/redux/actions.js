export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';
export const UPDATE_WIDGET_VISIBILITY = 'UPDATE_WIDGET_VISIBILITY';

export const addWidget = (category, widget) => ({
  type: ADD_WIDGET,
  payload: { category, widget }
});

export const removeWidget = (category, id) => ({
  type: REMOVE_WIDGET,
  payload: { category, id }
});

export const updateWidgetVisibility = (category, id, isVisible) => ({
  type: UPDATE_WIDGET_VISIBILITY,
  payload: { category, id, isVisible }
});
