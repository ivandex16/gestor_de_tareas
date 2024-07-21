import React from 'react'

export const ItemTask = ({ items }) => {
    return (
        <div>{
            items.map((item, index) => (
                <div key={index} className="item">
                    <div>{item.elem}</div>
                    <div>{item.value}</div>

                </div>
            ))

        }</div>
    )
}
