import React from "react"

export default function NavAccount() {
  return (
    <div className="nav-account">
      <div className="nav-account-container">
        <div className="nav-account-title">My Account</div>
        <a className="nav-account-link" href="/sign-in">
          Sign in or Sign up
        </a>
      </div>
    </div>
  )
}
