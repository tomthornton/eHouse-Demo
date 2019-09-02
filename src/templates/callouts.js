import React from "react"
import CardIcon from "../assets/images/card-icon.png"
import TruckIcon from "../assets/images/truck-icon.png"
import ReturnsIcon from "../assets/images/icon-returns.svg"

export default function Callouts() {
  const callouts = [
    {
      text: "free shipping on all orders",
      altText: "Shipping Truck",
      image: TruckIcon,
    },
    {
      text: "free returns on all orders",
      altText: "Free Returns Icon",
      image: ReturnsIcon,
    },
    {
      text: "Safe & secure checkout",
      altText: "Secure Checkout Icon",
      image: CardIcon,
    },
  ]

  return (
    <section className="callouts full-width-container">
      <div className="container">
        {callouts.map((callout, index) => (
          <div className="callout" key={index}>
            <div className="callout-image">
              <img src={callout.image} alt={callout.altText} />
            </div>
            <div className="callout-text">{callout.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
