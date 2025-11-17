import React from 'react';
import './FoodTable.css';

const FoodTable = () => {
  const foodData = [
    {
      id: 1,
      icon: '🌯',
      food: 'Burrito',
      meal: 'Pizza Burger',
      calories: 'Receiving',
      priorities: '01:00 AM',
      carbs: '20 gm',
    },
    {
      id: 2,
      icon: '🍔',
      food: 'Burger',
      meal: 'Pizza Burger',
      calories: 'Receiving',
      priorities: '01:00 AM',
      carbs: '20 gm',
    },
  ];

  return (
    <div className="food-table-container">
      <table className="food-table">
        <thead>
          <tr>
            <th>Food</th>
            <th>Meal</th>
            <th>Calories</th>
            <th>Priorities</th>
            <th>Carbs</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((item) => (
            <tr key={item.id}>
              <td data-label="Food">
                <div className="food-cell">
                  <span className="food-icon">{item.icon}</span>
                  <span>{item.food}</span>
                </div>
              </td>
              <td data-label="Meal">{item.meal}</td>
              <td data-label="Calories">{item.calories}</td>
              <td data-label="Priorities">{item.priorities}</td>
              <td data-label="Carbs">{item.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodTable;