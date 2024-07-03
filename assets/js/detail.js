//read more button
const readMoreButton = document.getElementById("readmore");
const overview = document.getElementById("overview");
readMoreButton.addEventListener("click", function () {
  overview.classList.toggle("more");
  if (readMoreButton.innerHTML.includes("More")) {
    readMoreButton.innerHTML = "Less";
  } else {
    readMoreButton.innerHTML = "More";
  }
});

//fancybox
Fancybox.bind('[data-fancybox="gallery"]', {});

//chart
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [80, 7, 13],
        backgroundColor: [
          "rgba(0, 112, 201, 255)",
          "rgba(75,154,217,255)",
          "rgba(153,198,233,255)",
        ],
        borderColor: [
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    cutout: 100,
    responsive: false,
  },
});
