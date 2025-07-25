import { useState } from "react";
import { useRouter } from "next/router";
import { Container, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await axios.post("https://devs-port-backend.onrender.com/api/auth/register", { username, email, password });
      router.push("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
    setLoading(false);
  };

  return (
    <>
      {/* For desktop view */}

      {loading && (
        <div className="loader_1 m-auto">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
          <div className="bar7"></div>
          <div className="bar8"></div>
          <div className="bar9"></div>
          <div className="bar10"></div>
          <div className="bar11"></div>
          <div className="bar12"></div>
        </div>
      )}


      <div className="bg-black p-5 min-h-screen md:flex hidden items-center justify-center">
        <div className="">
          <div>
            <h1 className="text-[45px] text-left font-semibold text-white mb-4">
              💡One Profile. <br />
              🚀Every Platform. <br />
              ✨Your Complete Digital Identity.
            </h1>
            <p className="text-[20px] text-gray-200 text-left mb-8">
              Let us bring all your online identities together in one place !
            </p>
            <p className="text-[25px] text-gray-200 text-left mb-8">
              🎉 Sign up now and take control of your online presence !
            </p>
          </div>
        </div>
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography className="text-white" variant="h4" gutterBottom>
            🚀Create Your Unified Profile
            <p className="text-gray-300 mt-5">Register Now !</p>
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              className="bg-gray-700 rounded-lg"
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              className="bg-gray-700 border-sky-300 rounded-lg"
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              className="bg-gray-700 border-sky-300 rounded-lg"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Register
            </Button>
          </form>
          <Typography className="text-white" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <a className="hover:text-sky-500" href="/login">
              Login
            </a>
          </Typography>
        </Container>
      </div>

      {/* For mobile view */}
      <div className="bg-black min-h-screen md:hidden flex flex-col items-center justify-center">
        <div className="">
          <h1 className="text-[25px] p-5 text-left w-[100vw] font-semibold text-white">
            💡One Profile. <br />
            🚀Every Platform. <br />
            ✨Your Complete Digital Identity.
          </h1>
        </div>
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography className="text-white" variant="h5" gutterBottom>
            Create Your Unified Profile
            <p className="text-gray-300 mt-2">🚀Register Now !</p>
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              className="bg-gray-600 rounded-lg"
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              className="bg-gray-600 border-sky-300 rounded-lg"
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              className="bg-gray-600 border-sky-300 rounded-lg"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Register
            </Button>
          </form>
          <Typography className="text-white" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <a className="hover:text-sky-500" href="/login">
              Login
            </a>
          </Typography>
        </Container>

        <div className="m-5">
          <p className="text-[20px] text-gray-200 text-left">
            Let us bring all your online identities together in one place !
          </p>
          <p className="text-[25px] text-gray-200 text-left mt-5">
            🎉 Sign up now and take control of your online presence !
          </p>
        </div>
      </div>
    </>
  );
}
