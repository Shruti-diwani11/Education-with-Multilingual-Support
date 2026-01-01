import styles from "./Login.module.css";
import illustration from "../../assets/login-illustration.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // ✅ Save user data (used in dashboard)
      localStorage.setItem("user", JSON.stringify(data.user));

      setEmail("");
      setPassword("");

      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      alert("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>

        {/* LEFT */}
        <div className={styles.left}>
          <img src={illustration} alt="Login" />
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.brand}>
            <div className={styles.logo}>EWMS</div>
            <p className={styles.tagline}>Education with Multilingual Support</p>
          </div>


          <h1>Student Login</h1>
          <p className={styles.subtitle}>
            Hey, enter your details to sign in
          </p>

          <label>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className={styles.loginBtn}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className={styles.footer}>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>
              Register
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
