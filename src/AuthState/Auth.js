    import  jwtDecode  from 'jwt-decode';
    import axios from 'axios';

    // Simpan JWT token ke localStorage
    export const setToken = (token) => {
        localStorage.setItem('authToken', token);
    };

    // Ambil token dari localStorage
    export const getToken = () => {
        return localStorage.getItem('authToken');
    };

    // Hapus token
    export const removeToken = () => {
        localStorage.removeItem('authToken');
    };

   
    export const getUserInfo = () => {
    const user = localStorage.getItem("user");
    if (!user) return null;
    try {
      return JSON.parse(user); // Pastikan di-parse ke object
    } catch (e) {
      console.error("Failed to parse user:", e);
      return null;
    }
  };
  

    // Logout user
    export const handleLogout = () => {
        removeToken();
        window.location.href = '/';
    };

    // Set Authorization header default buat axios
    export const setAxiosDefaults = () => {
        const token = getToken();
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    };
