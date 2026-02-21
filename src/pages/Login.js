const handleLogin = () => {
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!validUser) {
    alert("Invalid Credentials");
    return;
  }

  if (validUser.role === "student") {
    navigate("/student");
  } else {
    navigate("/teacher");
  }
};