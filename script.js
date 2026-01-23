// Gold Rate Auto Update (Demo API)
fetch("https://api.metals.live/v1/spot/gold")
  .then(res => res.json())
  .then(data => {
    document.getElementById("goldRate").innerText =
      "Live Gold Rate: ₹" + data[0][1] + " / gram";
  })
  .catch(() => {
    document.getElementById("goldRate").innerText =
      "Live Gold Rate: Update unavailable";
  });

function sendWhatsApp() {
  let product = document.getElementById("product").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  if (!product || !date || !time) {
    alert("Please fill all details");
    return;
  }

  let message =
`Hi Vigneshwara Jewellery 👋
I would like to book an online jewellery slot.

📿 Product: ${product}
📅 Date: ${date}
⏰ Time: ${time}

Please confirm availability.`;

  let url =
    "https://wa.me/91XXXXXXXXXX?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}
