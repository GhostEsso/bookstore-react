import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatusFunc } from '../redux/categories/CategoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesStatus = useSelector((state) => state.categoriesReducer.status);

  const updateCategoryStatus = () => {
    const newStatus = CheckStatusFunc(categoriesStatus);
    dispatch({ type: 'categories/changeStatus', payload: newStatus });
  };

  return (
    <div>
      <h1>{categoriesStatus}</h1>
      <button type="button" onClick={updateCategoryStatus}>Check Status</button>
    </div>
  );
};

export default Categories;
