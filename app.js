const endDate = "20 December 2026 11:11 PM";

document.getElementById("end-date").innerText = endDate;
let inputs = document.querySelectorAll("input");

const clock = () => {
  let end = new Date(endDate);
  let now = new Date();
  let diff = (end - now) / 1000;
  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24); //? day
  inputs[1].value = Math.floor((diff / 3600) % 24); //? hour
  inputs[2].value = Math.floor((diff / 60) % 60); //? minute
  inputs[3].value = Math.floor(diff % 60); //? seconds
};

// initial call
setInterval(() => clock(), 1000);

// 1 day = 24 hours
// 1 hour = 60 min
// 60 min = 3600 sec
