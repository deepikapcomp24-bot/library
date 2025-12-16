import React, { useState } from 'react';

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  const [user, setUser] = useState(storedUser);
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(
    storedUser?.profileImage ||
      'data:image/png;base64,iVBORw0K...'
  );

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f0e9]">
        <p className="text-lg text-[#6b4c3b]">No user logged in. Please login first.</p>
      </div>
    );
  }

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedUser = { ...user, profileImage };
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-[#f7f0e9] flex items-center justify-center p-6 font-serif text-[#6b4c3b]">
      <div className="max-w-md w-full bg-[#f2e9e1] p-8 rounded-xl shadow-lg border border-[#d7c4b9]">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#4a3623]">My Profile</h2>

        <div className="flex justify-center mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 object-cover border-4 border-[#b08357] rounded-full"
          />
        </div>

        {isEditing && (
          <div className="flex justify-center mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-[#6b4c3b]"
            />
          </div>
        )}

        <div className="space-y-3 text-[#7b6045]">
          {isEditing ? (
            <>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d7c4b9] rounded focus:outline-none focus:ring-2 focus:ring-[#b08357]"
                placeholder="Username"
              />
              <input
                type="text"
                name="place"
                value={user.place}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d7c4b9] rounded focus:outline-none focus:ring-2 focus:ring-[#b08357]"
                placeholder="Place"
              />
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d7c4b9] rounded focus:outline-none focus:ring-2 focus:ring-[#b08357]"
                placeholder="Age"
              />
              <input
                type="text"
                name="education"
                value={user.education}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d7c4b9] rounded focus:outline-none focus:ring-2 focus:ring-[#b08357]"
                placeholder="Education"
              />
              <input
                type="text"
                name="contact"
                value={user.contact}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d7c4b9] rounded focus:outline-none focus:ring-2 focus:ring-[#b08357]"
                placeholder="Contact"
              />
            </>
          ) : (
            <>
              <p><span className="font-semibold">Username:</span> {user.username}</p>
              <p><span className="font-semibold">Place:</span> {user.place}</p>
              <p><span className="font-semibold">Age:</span> {user.age}</p>
              <p><span className="font-semibold">Education:</span> {user.education}</p>
              <p><span className="font-semibold">Contact:</span> {user.contact}</p>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-[#b08357] text-white rounded hover:bg-[#7b6045] transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-[#e6d9cc] text-[#7b6045] rounded hover:bg-[#c8b8a6] transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-[#b08357] text-white rounded hover:bg-[#7b6045] transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
