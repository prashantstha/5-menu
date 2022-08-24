import React, {useState} from 'react'

const Categories = ({categories, filterItems}) => {
    const [ activeTab, setActiveTab ] = useState(0);
    function handleBtn(category, index) {
        filterItems(category);
        setActiveTab(index);
    }
    return (
        <div className='filter'>
            {categories.map((category, index) => {
                return (
                    <button key={index} className={index === activeTab ? 'filter-item active' : 'filter-item'} onClick={() => handleBtn(category, index)}>{category}</button>
                )
            })}
        </div>
    )
}

export default Categories;