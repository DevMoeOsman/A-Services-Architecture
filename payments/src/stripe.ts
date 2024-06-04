import Stripe from 'stripe';

const stripeKey = process.env.STRIPE_KEY;

if (!stripeKey) {
  throw new Error("STRIPE_KEY environment variable is not defined");
}

// Ensure compatibility with TypeScript and CommonJS/ES modules
const stripe = new Stripe(stripeKey, {
  apiVersion: '2024-04-10',
} as Stripe.StripeConfig); // Casting to Stripe.StripeConfig to satisfy TypeScript

export { stripe };
