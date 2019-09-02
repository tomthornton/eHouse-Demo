import React from "react"
import VacayThisWayDesktop from "../assets/images/vacay-this-way--desktop.jpg"
import VacayThisWayMobile from "../assets/images/vacay-this-way--mobile.jpg"

export default function TextImageBanner() {
  return (
    <section className="text-image-banner full-width-container">
      <div className="container">
        <div className="text-box">
          <div className="text-box-content">
            <h2 className="text-box-title">Vacay This Way</h2>
            <h3 className="text-box-subtitle">
              Everything you need for your summer get away!
            </h3>
            <button className="text-box-button">Shop Summer Essentials</button>
          </div>
        </div>
        <div
          className="text-image-banner-background-desktop"
          style={{ backgroundImage: `url(${VacayThisWayDesktop})` }}
        />
        <div
          className="text-image-banner-background-mobile"
          style={{ backgroundImage: `url(${VacayThisWayMobile})` }}
        />
      </div>
    </section>
  )
}
