import React from 'react';

const Card = ({ products, cart }) => {
  return (
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map(({id, image, name, price, description}) => (
        <div
          key={id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          {/* Image */}
          <img
            src={image}
            alt={name}
            className="w-full h-56 object-cover"
          />

          {/* Card Content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {name}
            </h2>
            <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
            
            {/* Price */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-[#ff7e5f]">
                ${price}
              </span>
            </div>
            
            {/* Add to Cart Button */}
            <button onClick={()=>{
              cart.setItems([...cart.items,{id:id, image:image, name:name, price:price}])
            }}
              className="mt-4 w-full px-4 py-2 bg-[#ff7e5f] text-white rounded-lg hover:bg-[#e76a4a] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;