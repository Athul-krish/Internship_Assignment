import React from 'react';
import Navbar from './Navbar';
import AddBlogWidget from './AddBlogWidget';

const AddBlogPage = () => {
  return (
    <div>
        <Navbar pageTitle={"Add Blog"} />
        <AddBlogWidget />
    </div>
  )
}

export default AddBlogPage