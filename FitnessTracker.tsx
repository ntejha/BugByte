import React, { useState } from "react";

const FitnessTracker: React.FC = () => {
  const [tab, setTab] = useState("login");
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = () => {
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setUser({ name: isSignUp ? name : "User", email });
    setTab("home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-4xl font-extrabold mb-6">Fitness Tracker App</h1>
      
      {!user ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>
          {isSignUp && (
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full p-3 mb-3 border rounded-lg" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 mb-3 border rounded-lg" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 mb-3 border rounded-lg" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignUp && (
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="w-full p-3 mb-4 border rounded-lg" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <button 
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg hover:opacity-80 transition" 
            onClick={handleAuth}
          >
            {isSignUp ? "Create Account" : "Login"}
          </button>
          <p className="mt-4 text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"} 
            <button className="text-blue-500 ml-1 underline" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      ) : (
        <div className="w-full max-w-md text-center">
          <nav className="mb-4 flex justify-around bg-white p-3 rounded-lg shadow-md text-gray-800">
            <button onClick={() => setTab("home")} className="text-indigo-600 font-semibold">Home</button>
            <button onClick={() => setTab("profile")} className="text-indigo-600 font-semibold">Profile</button>
            <button onClick={() => setTab("activity")} className="text-indigo-600 font-semibold">Activity</button>
            <button onClick={() => setTab("leaderboard")} className="text-indigo-600 font-semibold">Leaderboard</button>
          </nav>

          {tab === "home" && <p className="text-lg font-semibold">Welcome, {user.name}!</p>}

          {tab === "profile" && (
            <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
              <h2 className="text-xl font-bold">Profile</h2>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )}

          {tab === "activity" && (
            <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
              <h2 className="text-xl font-bold">Physical Activity</h2>
              <p>Steps: 5,000</p>
              <p>Calories Burned: 300</p>
              <p>Distance: 3.2 km</p>
            </div>
          )}

          {tab === "leaderboard" && (
            <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
              <h2 className="text-xl font-bold">Leaderboard</h2>
              <ul>
                <li>1. Alex - 12,000 steps</li>
                <li>2. Jamie - 10,500 steps</li>
                <li>3. Chris - 9,800 steps</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FitnessTracker;
