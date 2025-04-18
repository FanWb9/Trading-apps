import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const GoogleButton = () => {
  const navigate = useNavigate();

  const onSuccess = async (credentialResponse) => {
    const googleToken = credentialResponse.credential;
    console.log("Token from Google:", googleToken);

    try {
      const res = await fetch("http://localhost:8080/api/auth/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: googleToken })
      });

      const data = await res.json();
      console.log("User:", data);

      // Simpan token ke localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect ke dashboard
      navigate("/dashboard");

    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={() => console.log("Login Failed")}
    />
  );
};

export default GoogleButton;
