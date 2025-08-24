import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // <-- for validation errors

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ username, email, password });
      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        User Name
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {errors.username && <div role="alert">{errors.username}</div>}

      <label>
        Email Address
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {errors.email && <div role="alert">{errors.email}</div>}

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errors.password && <div role="alert">{errors.password}</div>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
