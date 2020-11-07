import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './BreadCrumbs.css';

const BreadCrumb = (props) => {
  return (
    <div >
      <Breadcrumb>
        <BreadcrumbItem><a href="#" className='pl-4'>Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Data</a></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;