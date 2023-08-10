import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../features/counter/user/userSlice';
import { RootState } from '../app/rootReducer';
import { FiUser } from 'react-icons/fi'; // Importing user icon

const User = () => {
    const [inputName, setInputName] = useState('');
    const dispatch = useDispatch();
    const userName = useSelector((state: RootState) => state.user.name);

    const handleChangeName = () => {
        dispatch(updateName(inputName));
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-4">
            <div className="flex items-center bg-white p-3 rounded-full shadow-md">
                <FiUser className="text-blue-500 text-2xl" />
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    className="p-2 border rounded ml-2 w-60"
                    placeholder="Enter name"
                />
            </div>
            <button
                onClick={handleChangeName}
                className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
            >
                Update Name
            </button>
            <div className="text-lg font-semibold bg-white p-4 rounded shadow-md">
                {userName ? `Hello, ${userName}!` : 'Please enter your name.'}
            </div>
        </div>
    );
};

export default User;
