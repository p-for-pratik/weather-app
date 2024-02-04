import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './loginUsers.css';

export const LoginUsers = () => {
    const initialUser = {
        username: '',
        addedDate: '',
        status: 'Active',
    };

    const [users, setUsers] = useState([
        {
            username: 'JohnDoe',
            addedDate: '2022-02-04',
            status: 'Active',
        },
        {
            username: 'JaneSmith',
            addedDate: '2022-01-15',
            status: 'Inactive',
        },
    ]);

    const [newUser, setNewUser] = useState({ ...initialUser });
    const [buttonLabel, setButtonLabel] = useState('Add');
    const [dateValue, setDateValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddUser = () => {
        if (!newUser.username.trim()) {
            alert("Username cannot be empty");
            return;
        }

        const currentDate = new Date().toISOString().split('T')[0];
        const userWithDate = {
            ...newUser,
            addedDate: currentDate,
        };

        setUsers([...users, userWithDate]);
        setNewUser({ ...initialUser });
    };

    const handleChangeStatus = (index) => {
        const updatedUsers = [...users];
        updatedUsers[index].status = updatedUsers[index].status === 'Active' ? 'Inactive' : 'Active';
        setUsers(updatedUsers);

        setButtonLabel((prevLabel) => (prevLabel === 'Add' ? 'Delete' : 'Add'));
    };

    const handleDateChange = (e) => {
        setDateValue(e.target.value);
    };


    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
      };
    
    
    
      const submitDropdownForm = (e) => {
        e.preventDefault();
        console.log('Dropdown Submitted:', selectedOption);
      
        // Add your logic for sorting the table based on the selected column
        const sortedUsers = [...users].sort((a, b) => {
          if (a[selectedOption] < b[selectedOption]) return -1;
          if (a[selectedOption] > b[selectedOption]) return 1;
          return 0;
        });
      
        setUsers(sortedUsers);
      };
    

    const submitDateForm = (e) => {
        e.preventDefault();
        const filteredUsers = users.filter(user => user.addedDate === dateValue);
        setUsers(filteredUsers);
    };

    return (
        <div>
            <Navbar name={true}/>
            <div className='AllUsersContainer'>
                <div className='leftDiv'>
                    <h2>Please add the user</h2>
                    <form>
                        <input
                            className='usernameInput'
                            placeholder='Username'
                            type="text"
                            name="username"
                            value={newUser.username}
                            onChange={handleInputChange}
                            size="30"
                            required
                        />
                        <br />
                        <br />
                        <button className='leftBtn' type="button" onClick={handleAddUser}>
                            Add User
                        </button>
                    </form>
                </div>
                <div className='RightDiv'>
                    <div className='leftOfRightdiv'>
                        <h2>User List</h2>
                        <table className='tables'>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Added Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.addedDate}</td>
                                        <td>{user.status}</td>
                                        <td>
                                            <button onClick={() => handleChangeStatus(index)}>
                                                {user.status === 'Active' ? 'Delete' : 'Add'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='rightOfRightdiv'>
                        <div>
                            <h1 className='filterhead'>Filter</h1>

                            <form className='filterDate' onSubmit={submitDateForm}>
                                <input style={{ width: '130px' }} placeholder="Date" type="date" value={dateValue} onChange={handleDateChange} />
                                <button className='filterbtn' type="submit">Filter By date</button>
                            </form>
                            <form className='filterDate' onSubmit={submitDropdownForm}>

                                <select style={{ width: '130px' }} placeholder="Sort By" value={selectedOption} onChange={handleDropdownChange}>
                                    <option  value="username">User name</option>
                                    <option value="addedDate">Date</option>
                                    <option value="status">Status</option>
                                </select>
                                <button className='filterbtn' type="submit">Sort Table</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Loginusersfooter'>
                <Footer />
            </div>
        </div>
    );
};
