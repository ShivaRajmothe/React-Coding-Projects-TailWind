import React, { useState } from "react";

const playersData = [
  { id: 1, name: "Rohit Sharma", role: "Batsman", bat: 90, bowl: 90 },
  { id: 2, name: "Virat Kohli", role: "Batsman", bat: 90, bowl: 70 },
  { id: 3, name: "Shikhar Dhawan", role: "Batsman", bat: 85, bowl: 50 },
  { id: 4, name: "Shreyas Iyer", role: "Batsman", bat: 87, bowl: 40 },
  { id: 5, name: "Mayank Agarwal", role: "Batsman", bat: 90, bowl: 40 },
  { id: 6, name: "Ajinkya Rahane", role: "Batsman", bat: 84, bowl: 45 },
  { id: 7, name: "Rishabh Pant", role: "Wicket Keeper", bat: 90, bowl: 20 }
];

export default function CricketSorting() {
  const [available, setAvailable] = useState(playersData);
  const [selected, setSelected] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const addPlayer = (player) => {
    setSelected([...selected, player]);
    setAvailable(available.filter(p => p.id !== player.id));
  };

  const removePlayer = (player) => {
    setAvailable([...available, player]);
    setSelected(selected.filter(p => p.id !== player.id));
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = (data) => {
    if (!sortConfig.key) return data;
    
    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortConfig.direction === 'asc'
        ? aValue - bValue
        : bValue - aValue;
    });

    return sorted;
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return ' ↕';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <div className="flex gap-8 p-8 bg-gray-50 min-h-screen">
      
      {/* LEFT SIDE - Available Players */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Available Players</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th 
                  className="border border-gray-300 p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleSort('name')}
                >
                  Name{getSortIndicator('name')}
                </th>
                <th 
                  className="border border-gray-300 p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleSort('role')}
                >
                  Role{getSortIndicator('role')}
                </th>
                <th 
                  className="border border-gray-300 p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleSort('bat')}
                >
                  Bat{getSortIndicator('bat')}
                </th>
                <th 
                  className="border border-gray-300 p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleSort('bowl')}
                >
                  Bowl{getSortIndicator('bowl')}
                </th>
                <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedData(available).map(player => (
                <tr key={player.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 p-3 text-gray-700">{player.name}</td>
                  <td className="border border-gray-300 p-3 text-gray-700">{player.role}</td>
                  <td className="border border-gray-300 p-3 text-gray-700">{player.bat}</td>
                  <td className="border border-gray-300 p-3 text-gray-700">{player.bowl}</td>
                  <td className="border border-gray-300 p-3 text-center">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded transition-colors"
                      onClick={() => addPlayer(player)}
                      title="Add player"
                    >
                      ➜
                    </button>
                  </td>
                </tr>
              ))}
              {available.length === 0 && (
                <tr>
                  <td colSpan="5" className="border border-gray-300 p-4 text-center text-gray-500 italic">
                    No players available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT SIDE - Selected Players */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Selected Players</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th 
                  className="border border-gray-300 p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleSort('name')}
                >
                  Name{getSortIndicator('name')}
                </th>
                <th 
                  className="border border-gray-300 p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleSort('role')}
                >
                  Role{getSortIndicator('role')}
                </th>
                <th 
                  className="border border-gray-300 p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleSort('bat')}
                >
                  Bat{getSortIndicator('bat')}
                </th>
                <th 
                  className="border border-gray-300 p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleSort('bowl')}
                >
                  Bowl{getSortIndicator('bowl')}
                </th>
                <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedData(selected).map(player => (
                <tr key={player.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 p-3 text-gray-700">{player.name}</td>
                  <td className="border border-gray-300 p-3 text-gray-700">{player.role}</td>
                  <td className="border border-gray-300 p-3 text-gray-700">{player.bat}</td>
                  <td className="border border-gray-300 p-3 text-gray-700">{player.bowl}</td>
                  <td className="border border-gray-300 p-3 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition-colors"
                      onClick={() => removePlayer(player)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {selected.length === 0 && (
                <tr>
                  <td colSpan="5" className="border border-gray-300 p-4 text-center text-gray-500 italic">
                    No players selected
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}   