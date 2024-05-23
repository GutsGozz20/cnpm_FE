import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import background from "../../asset/image/background.webp";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newUserName, setNewUserName] = useState(''); // Thêm tên người dùng mới
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [users, setUsers] = useState([]); // Danh sách người dùng

    useEffect(() => {
        // Lấy thông tin tài khoản từ API khi component được tải lần đầu
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('/api/admin/userInfo');
                setUserInfo(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user info:', error);
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    useEffect(() => {
        // Lấy danh sách người dùng từ API
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/admin/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleLogout = () => {
        // Xử lý đăng xuất ở đây
        navigate('/');
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put('/api/admin/update', {
                email: newEmail,
                password: newPassword
            });
            setUserInfo(response.data);
            setSuccessMessage('User information updated successfully');
            setError('');
        } catch (error) {
            console.error('Error updating user info:', error);
            setError('An error occurred while updating user information');
            setSuccessMessage('');
        }
    };

    const handleAddUser = async () => {
        try {
            const response = await axios.post('/api/admin/users', {
                name: newUserName,
                email: newEmail,
                password: newPassword
            });
            setUsers([...users, response.data]);
            setNewUserName('');
            setNewEmail('');
            setNewPassword('');
            setSuccessMessage('User added successfully');
            setError('');
        } catch (error) {
            console.error('Error adding user:', error);
            setError('An error occurred while adding the user');
            setSuccessMessage('');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{backgroundImage: `url(${background})`}}  className='h-screen flex justify-center items-center'>
            <div className="max-w-lg mx-auto p-4 border rounded-md shadow-md bg-white">
                <h1 className="text-2xl font-bold mb-2">Welcome, {userInfo.name}</h1>
                <h2 className="mb-2">Email: {userInfo.email}</h2>
                <h2 className="mb-2">Password: {userInfo.password}</h2>

                {/* Cập nhật thông tin */}
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Update Information</h2>
                    <input
                        type="text"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="New Email"
                        className="w-full py-2 px-4 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        className="w-full py-2 px-4 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                    >
                        Update
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                </div>

                {/* Thêm người dùng mới */}
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Add New User</h2>
                    <input
                        type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        placeholder="Name"
                        className="w-full py-2 px-4 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full py-2 px-4 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full py-2 px-4 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <button
                        onClick={handleAddUser}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mr-2"
                    >
                        Add User
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                </div>

                <button
                    onClick={handleLogout}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Logout
                </button>

                {/* Danh sách người dùng */}
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">User List</h2>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.name} - {user.email}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
