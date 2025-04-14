document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const fullName = form.fullname.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();
    const dish = form.dish.value;
    const instructions = form.instructions.value.trim();

    if (!fullName || !phone || !address || !dish) {
      alert("Please fill in all required fields.");
      return;
    }

    // You can replace this with sending the order to a backend server later
    const orderSummary = `
Thank you, ${fullName}!
Your order for "${dish}" will be delivered to:
${address}

📞 Contact: ${phone}
📝 Notes: ${instructions || "None"}

We’ll call you shortly to confirm your order.
`;

    alert(orderSummary);

    // Optionally clear the form after submission
    form.reset();
  });
});
