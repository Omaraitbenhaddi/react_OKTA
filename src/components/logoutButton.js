import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"


function LogoutButton() {
    const { logout , isAuthenticated}=useAuth0();
  return (
    <>
   
    {isAuthenticated && (
        <>
         <h1>lougout </h1>
    <button onClick={logout} >
        LogoutButton

    </button>
    </>
    )}
    </>
  )
}

export default LogoutButton