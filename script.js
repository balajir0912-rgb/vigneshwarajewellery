// Live Gold Rate (demo API)
fetch("https://api.metals.live/v1/spot/gold")
  .then(res => res.json())
  .then(data => {
    document.getElementById("goldRate").innerText =
      "Live Gold Rate: ₹" + data[0][1] + " / gram";
  })
  .catch(() => {
    document.getElementById("goldRate").innerText =
      "Live Gold Rate unavailable";
  });

// Product enquiry
function enquire(product) {
  let msg = `Hi Vigneshwara Jewellery,
I am interested in ${product}.
Please share more details.`;

  window.open(
    "https://wa.me/8074720673?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

// Appointment booking
function bookSlot() {
  let product = document.getElementById("product").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  if (!product || !date || !time) {
    alert("Please fill all details");
    return;
  }

  let msg = `Hi Vigneshwara Jewellery,
I would like to book an appointment.

Product: ${product}
Date: ${date}
Time: ${time}`;

  window.open(
    "https://wa.me/8074720673?text=" + encodeURIComponent(msg),
    "_blank"
  );
}
