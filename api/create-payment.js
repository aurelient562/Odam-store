export default async function handler(req, res) {

  const response = await fetch("https://api.payment.com/create-payment", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.PAYMENT_SECRET_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();

  res.status(200).json(data);
}
