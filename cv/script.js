const visitsEl = document.getElementById("visits");

fetch("https://4x8e4sgvc9.execute-api.us-east-1.amazonaws.com/count")
  .then((res) => res.json())
  .then((data) => {
    visitsEl.textContent = data.count;
  })
  .catch((err) => {
    console.error("Counter error:", err);
    visitsEl.textContent = "N/A";
  });
