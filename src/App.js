import './scss/App.scss';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';
import React, { useState } from 'react';

const allCategoies = ['all', ...new Set(items.map((item) => item.category))] ;

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategoies);

  const filterItems = (category) => {
    if( category === 'all') {
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems);
  }
  

  return (
    <div className="App">
      <div className="container">
        <div className='title'>
          <h1>Our Menus</h1>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItem} />
      </div>
    </div>
  );
}

export default App;