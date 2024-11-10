import React, { useState } from 'react';

interface ProfileProps {
    name: string;
    email: string;
}

const Profile: React.FC<ProfileProps> = ({ name, email}) => {
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [countryOfOrigin, setCountryOfOrigin] = useState("");

    return (
        <div className="profile-container">
            <img src={""} alt="Avatar" className="avatar" />
            <div className="profile-field">
                <label>Name:</label>
                <span>{name}</span>
            </div>
            <div className="profile-field">
                <label>Email:</label>
                <span>{email}</span>
            </div>
            <div className="profile-field">
                <label>Date of Birth:</label>
                <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </div>
            <div className="profile-field">
                <label>Country of Origin:</label>
                <input
                    type="text"
                    value={countryOfOrigin}
                    onChange={(e) => setCountryOfOrigin(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Profile;