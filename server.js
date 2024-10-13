const express = require('express');
const stripe = require('stripe')('your_stripe_secret_key');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.post('/your_server_endpoint', async (req, res) => {
  try {
    const { token } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Amount in cents
      currency: 'usd',
      payment_method: token,
      confirmation_method: 'manual',
      confirm: true,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error processing payment.' });
  }
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});