// ActiveUsers.jsx
import React, { useEffect, useState } from 'react';
import { auth,database } from '../../firebase';
import {ref, onValue, off} from "firebase/database";

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    const presenceRef = ref(database, 'presence');

    const fetchActiveUsers = () => {
      onValue(presenceRef, (snapshot) => {
        const onlineUsers = [];
        snapshot.forEach((childSnapshot) => {
          const user = childSnapshot.val();
          onlineUsers.push({ uid: childSnapshot.key, ...user });
        });

        setActiveUsers(onlineUsers);
      });
    };

    fetchActiveUsers();

    return () => {
      off(presenceRef);
    };
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {activeUsers.map((user, index) => (
          <li key={index}>
            User ID: {user.uid}, Status: {user.online ? 'Online' : 'Offline'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveUsers;
