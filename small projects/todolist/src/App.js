import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect} from 'react';




function App() {
  const [users, setUsers] = useState([]);

  // useEffect to fetch data when the component mounts
   useEffect(() => {
    // Function to fetch data from an API
    const fetchUsers = async () => {
      try {
        // Fetch data from the API (replace with your API endpoint)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        // Update the state with the fetched data
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  

    // Call the fetchUsers function
    fetchUsers();

    // Cleanup function (optional): runs before the component is unmounted
    return () => {
      console.log('Component will unmount. Cleanup if needed.');
      // Clean up resources if needed
    };
  }, []); // Empty dependency array means the effect runs once, similar to componentDidMount

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
