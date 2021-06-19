app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Stubborn Attachments',
              images: ['https://i.imgur.com/EHyR2nP.png'],
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success.ejs`,
      cancel_url: `${YOUR_DOMAIN}/cancel.ejs`,
    });
    res.json({ id: session.id });
  });