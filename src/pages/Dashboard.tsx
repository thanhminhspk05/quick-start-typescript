import axios from 'axios';

const DashboardPage = () => {
  const handleLogout = async () => {
    const response = await axios.get('http://localhost:8000/api/v1/logout', { withCredentials: true });
  };

  return (
    <>
      <h1> Dashboard </h1>
      <button onClick={handleLogout}> Logout </button>
    </>
  );
};
export default DashboardPage;
