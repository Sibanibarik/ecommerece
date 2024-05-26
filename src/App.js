import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import Forgetpassword from'./pages/Forgetpassword'
function App() {
  return (
    <div className="App">
     <LoginPage></LoginPage>
     <br></br>
     {/* <SignupPage></SignupPage> */}
     {/* <Forgetpassword></Forgetpassword> */}
    </div>
  );
}

export default App;
