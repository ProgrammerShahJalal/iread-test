"use client";

import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

function DonationPage() {
  const [donationData, setDonationData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    amount: "",
  });

  // This will load Stripe.js and return the Stripe instance.
  let stripePromise: Promise<any>;

  const getStripe = (): Promise<any> => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51JwIBsFBTfTsSwmz8bqtyXmnIOlnITi40PZxeH94CVw4gw41R2R6chUyOdKef9J0CCNKuB22rOlGeVlfUcS2L9Nf008TuoJ83R"
      ); // Use your Stripe public key here
    }
    return stripePromise;
  };
console.log("pub key", process?.env?.STRIPE_PUBLIC_KEY);
console.log("next backend", process?.env?.NEXT_PUBLIC_BACKEND_URL);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDonationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseFloat(donationData.amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    
    try {
      console.log('from frontend', donationData)
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/donations/create-checkout-session`,
        donationData
      );
      
      const sessionId = response.data?.sessionId;

      // Redirect to Stripe Checkout
      const stripe = await getStripe(); 
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-7">
              <h4>Be a Hero: Make a Difference with Your Donation Today!</h4>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>
                    Name <small>*</small>
                  </label>
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder="Enter Name"
                    value={donationData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Email <small>*</small>
                  </label>
                  <input
                    name="email"
                    className="form-control"
                    type="text"
                    placeholder="Enter Email"
                    value={donationData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Phone <small>*</small>
                  </label>
                  <input
                    name="phone"
                    className="form-control"
                    type="text"
                    placeholder="Enter Phone"
                    value={donationData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Occupation <small>*</small>
                  </label>
                  <input
                    name="occupation"
                    className="form-control"
                    type="text"
                    placeholder="Enter Occupation"
                    value={donationData.occupation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Amount <small>*</small>
                  </label>
                  <input
                    name="amount"
                    className="form-control"
                    type="text"
                    placeholder="Enter Donation Amount"
                    value={donationData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-flat btn-theme-colored"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationPage;