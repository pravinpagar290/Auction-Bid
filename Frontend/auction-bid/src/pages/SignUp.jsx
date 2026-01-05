import React from 'react';
import { useState } from 'react';
const SignUp = () => {
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('u');
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImagePreview(reader.result);
      setProfileImage(file);
    };
  };
  return (
    <div>
      <div className="logo"></div>
      <h1>Create A Account</h1>
      <p>Join our auction community</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Full Name"
          name="name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name="password"
          required
        />
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select the role</option>
          <option value="bidder">Become Bidder</option>
          <option value="seller">Become Seller</option>
        </select>
        <div className="flex flex-col sm:flex-1 gap-2">
          <label className="text-[16px] text-stone-600">Profile Image</label>
          <div className="flex items-center gap-3">
            <img
              src={
                profileImagePreview ? profileImagePreview : '/imageHolder.jpg'
              }
              alt="profileImagePreview"
              className="w-14 h-14 rounded-full"
            />
            <input type="file" onChange={imageHandler} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
