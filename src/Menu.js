import React from 'react'
import './scss/Componets/menu.scss'

const Menu = ({items}) => {
    return (
        <div className='menus'>
            {items.map((menuItem) => {
                const {id, title, price, desc, img, category } = menuItem;
                return (
                    <article key={id} className="menus-item">
                        <img src={img} alt={title} />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h5>$ {price}</h5>
                            </header>
                            <div className="desc">
                                <span className='category'>{category}</span>
                                <p>{desc}</p>
                            </div>
                        </div>

                    </article>
                );
            })}
        </div>
    );
}

export default Menu;