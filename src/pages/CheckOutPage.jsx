import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51PfgCpHC1nGWY4m8xEeIwMjqBbvCO6hvuPrBI8EoIxZ6gKPCglgBWxzXZ8XF9ecb2ysjTfRasNbhklZVvbslBp4y00vbhxMClB"
);

const CheckOutPage = () => {
  const handleCheckout = async () => {
    try {
      const priceId = "price_1PfzruHC1nGWY4m8nnaH4ty9";
      const userId = 271;
      const { data } = await axios.post(
        "http://localhost:8000/api/veminto/create-checkout-session",
        {
          priceId,

          userId,
        }
      );
      const stripe = await stripePromise;
      const { id } = data;

      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default CheckOutPage;
