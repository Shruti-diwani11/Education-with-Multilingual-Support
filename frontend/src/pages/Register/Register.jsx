import styles from "./Register.module.css";
import illustration from "../../assets/register-illustration.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful! Please login.");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* LEFT */}
        <div className={styles.left}>
          <img src={illustration} alt="Register" />
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.brand}>
            <div className={styles.logo}>EWMS</div>
            <p className={styles.tagline}>Education with Multilingual Support</p>
          </div>


          <h1>Create Account</h1>
          <p className={styles.subtitle}>
            Sign up to start your learning journey
          </p>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />


          <button
            className={styles.registerBtn}
            onClick={handleRegister}
          >
            Register
          </button>

          <p className={styles.footer}>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
