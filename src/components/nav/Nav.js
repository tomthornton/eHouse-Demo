import React from "react"
import { IoMdMenu } from "react-icons/io"
import NavSearch from "./navsearch"
import NavAccount from "./navaccount"
import NavCart from "./navcart"

export default function Nav() {
  const navLinks = ["women", "men", "kids", "home", "sale"]

  return (
    <div className="nav-container">
      <button className="mobile-menu-icon">
        <IoMdMenu />
      </button>
      <ul className="nav-main-menu">
        {navLinks.map((link, index) => (
          <li className="nav-menu-item" key={index}>
            <a href={`/products/${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <NavSearch />
      <NavAccount />
      <NavCart cartCount={3} />
    </div>
  )
}
