import React from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();

  // Data pengguna (bisa di-fetch dari API atau localStorage)
  const user = {
    fullName: "Irfan Maulana",
    email: "irfan@example.com",
    phoneNumber: "+62 812-3456-7890",
    company: "Example Corp"
  };

  const handleEdit = () => {
    navigate("/edit-profile"); // arahkan ke halaman edit profile
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
          <div className="space-x-2">
            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
           
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-500 text-sm">Full Name</p>
            <p className="text-gray-800 font-medium">{user.fullName}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="text-gray-800 font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Phone Number</p>
            <p className="text-gray-800 font-medium">{user.phoneNumber}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Company</p>
            <p className="text-gray-800 font-medium">{user.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
