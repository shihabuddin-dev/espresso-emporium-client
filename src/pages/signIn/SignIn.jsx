import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../../components/ui/Button";
import { Link, useLocation, useNavigate } from "react-router";
import { FirebaseAuthContext } from "../../provider/FirebaseAuthContext";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = use(FirebaseAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSignIn = (e) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    loginUser(email, password)
      .then((result) => {
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("https://espresso-emporium-server-psi.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate(`${location?.state ? location.state : "/"}`);
            console.log("after update patch", data);
          });
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-addCoffee">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Sign in to your account
        </h2>

        <form onSubmit={handleSignIn}>
          <label className="block mb-2 text-sm font-medium">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full border rounded px-3 py-2 focus:outline-none pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
              onClick={togglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <p className="text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-blue-600 underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
