import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name, dispatch }) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id})}
    style={ complete ? {textDecoration: 'line-through'}}
)

export default Blog;