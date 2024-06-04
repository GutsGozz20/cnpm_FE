// components/List.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
    const [totalScore, setTotalScore] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTotalScore = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/total-score');
                setTotalScore(response.data.totalScore);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch total score');
            }
        };

        fetchTotalScore();
    }, []);

    return (
      <div>
          <h1>User List</h1>
          {error && <p>{error}</p>}
          <h1>Users with Scores:</h1>
          <ul>
              {Array.isArray(totalScore) ? (
                  totalScore.map(user => (
                      <li key={user._id}>
                          <div>ID: {user._id}</div>
                          <div>Username: {user.username}</div>
                          <div>Email: {user.email}</div>
                          <div>Score: {user.score}</div>
                      </li>
                  ))
              ) : (
                  <li>No users found</li>
              )}
          </ul>
      </div>
  );
};

export default List;
