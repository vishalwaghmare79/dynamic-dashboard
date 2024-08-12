import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions'; 

const Widget = ({ id, name, content, category }) => {
  const dispatch = useDispatch();

  return (
    <div className="widget">
      <h3>{name}</h3>
      <p>{content}</p>
      <button onClick={() => dispatch(removeWidget(category, id))}>❌</button>
    </div>
  );
};

export default Widget;
