import { useState } from "react";
import { useRouter } from "next/router";
import { Container, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://devs-port-backend.onrender.com/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
      localStorage.setItem("user", res.data.user);
      fetchData();
      // router.push("/setDetails");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const fetchData = async () => {
    const userID =
      typeof window !== "undefined" ? localStorage.getItem("userID") : null;
    try {
      const response = await axios.post("https://devs-port-backend.onrender.com/api/auth/getDb", { userID });
      const data = response.data.Checked;
      if (data) {
        router.push("/");
      } else {
        router.push("/setDetails");
      }
    } catch (error) {
      console.error("Error fetching data from DB:", error);
    }
  };

  return (
    <>
      {/* For desktop view */}

      <div className="bg-black p-5 min-h-screen md:flex hidden items-center justify-center">
        <div>
          <h1 className="text-[45px] text-left font-semibold text-white mb-8">
            Welcome Back !<br />
            Log In to Your Unified Profile 🔑
          </h1>
          <p className="text-[25px] text-gray-400 text-left mb-8">
            🚀 Access all your online identities in one place!
          </p>
          <p className="text-[25px] text-gray-300 text-left">
            🔐 Secure. Fast. Seamless.
          </p>
        </div>
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography className="text-white" variant="h4" gutterBottom>
            Login to Your Account
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              className="bg-gray-700 rounded-lg"
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              className="bg-gray-700 rounded-lg"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
          <Typography className="text-white" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <a className="hover:text-sky-500" href="/register">
              Register
            </a>
          </Typography>
        </Container>
      </div>

      {/* For mobile view */}

      <div className="bg-black p-5 min-h-screen flex flex-col md:hidden items-center justify-center">
        <div>
          <h1 className="text-[35px] text-left font-semibold text-white mb-5">
            Welcome Back !<br />
            Log In to Your Unified Profile 🔑
          </h1>
          <p className="text-[25px] text-gray-400 text-left mb-5">
            🚀 Access all your online identities in one place!
          </p>
          <p className="text-[25px] text-gray-300 text-left">
            🔐 Secure. Fast. Seamless.
          </p>
        </div>
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography className="text-white" variant="h4" gutterBottom>
            Login to Your Account
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              className="bg-gray-700 rounded-lg"
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              className="bg-gray-700 rounded-lg"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
          <Typography className="text-white" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <a className="hover:text-sky-500" href="/register">
              Register
            </a>
          </Typography>
        </Container>
      </div>
    </>
  );
}
