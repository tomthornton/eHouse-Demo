import React from "react"
import { FaSearch } from "react-icons/fa"

export default function NavSearch() {
  return (
    <div className="nav-search">
      <input className="nav-search-input" placeholder="Search" />
      <FaSearch className="nav-search-icon" />
    </div>
  )
}
