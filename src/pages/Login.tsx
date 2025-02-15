import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
// import { auth, googleProvider } from "../config/firebase";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  // Handle Email/Password Login
  const handleLogin = async () => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken(); // Get Firebase Token
      localStorage.setItem("token", token); // Store token
      navigate("/"); // Redirect to Home
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  // Handle Google Sign-In with Redirect
  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  // Get Token after Redirect
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          result.user.getIdToken().then((token) => {
            localStorage.setItem("token", token);
            navigate("/home");
          });
        }
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error.message);
        }
      });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-5">
          Login
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 mb-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <button
          onClick={signInWithGoogle}
          className="w-full py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center"
        >
          <span>Sign in with Google</span>
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}