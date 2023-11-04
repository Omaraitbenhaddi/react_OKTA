import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"


function LoginButton() {
    const { loginWithRedirect , isAuthenticated}=useAuth0();
    function clickButt(){
        console.log(isAuthenticated)
        loginWithRedirect()
    }
  return (
    <>
   
    {  !isAuthenticated && (
        <>
         <h1>login </h1>
    <button onClick={clickButt} >
        LoginButton

    </button>
    </>)}
    </>
  )
}

export default LoginButton