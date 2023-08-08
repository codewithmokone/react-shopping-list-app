import React from 'react';
import NavigationBar from './NavigationBar';
import Card from '../components/Card';

const ViewItems = () => {

  return (
    <div className="viewlist-container">
      <header className='view-nav'>
        <NavigationBar />
      </header>
      <main className="viewlist-main">
        <div className="viewlist-heading">
          <h4 className="view-heading">Added Items</h4>
        </div>
        <div className="viewlist-items">
          <Card />
        </div>
      </main>
    </div>
  )
}

export default ViewItems