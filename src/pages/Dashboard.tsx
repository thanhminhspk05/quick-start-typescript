import axios from 'axios';
import { useCookies } from 'react-cookie';

const DashboardPage = () => {
  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);
  console.log(cookies);
  const handleLogout = async () => {
    console.log('logout');
    const response = await axios.get('http://localhost:8000/api/v1/logout', { withCredentials: true });
    console.log({ response });
  };

  return (
    <>
      <h1> Dashboard </h1>
      <button onClick={handleLogout}> Logout </button>
    </>
  );
};
export default DashboardPage;
