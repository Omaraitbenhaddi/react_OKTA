import LoginButton from './components/LoginButton';
import LogoutButton from './components/logoutButton';
import NavbarSys from './components/NavbarSys';
import Profile from './components/Profile';
import { useAuth0 } from "@auth0/auth0-react"

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <>        
    <NavbarSys/>
   
    <main className="column">
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </main>
    </>
  );
}

export default App;