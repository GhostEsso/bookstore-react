import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatusFunc } from '../redux/categories/CategoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const UpdateCategoryStatus = () => dispatch(CheckStatusFunc());
  const CategoriesStatus = useSelector((state) => state.categoriesReducer);
  return (
    <div>
      {CategoriesStatus.map((status) => <h1 key={status}>{status}</h1>)}
      <button type="button" onClick={UpdateCategoryStatus}>Check Status</button>
    </div>
  );
};

export default Categories;
