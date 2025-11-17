// src/components/FoodTable.jsx
import React from 'react';
import './FoodTable.css';

const FoodTable = () => {
  const foods = [
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
          {foods.map((f) => (
            <tr key={f.id}>
              <td data-label="Food">
                <div className="food-cell">
                  <span className="food-icon">{f.icon}</span>
                  <span>{f.food}</span>
                </div>
              </td>

              <td data-label="Meal">{f.meal}</td>
              <td data-label="Calories">{f.calories}</td>
              <td data-label="Priorities">{f.priorities}</td>
              <td data-label="Carbs">{f.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodTable;
