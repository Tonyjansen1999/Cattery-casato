document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".photo-gallery img");
  const popup = document.getElementById("photo-popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.querySelector(".close");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      popup.style.display = "block";
      popupImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  popup.addEventListener("click", function (e) {
    if (e.target !== popupImg) {
      popup.style.display = "none";
    }
  });
});

/* */
// Get elements
const modal = document.getElementById("myModal");
const addMessageBtn = document.getElementById("addMessageBtn");
const closeModal = document.getElementById("closeModal");
const submitMessage = document.getElementById("submitMessage");
const messagesDiv = document.getElementById("messages");

// Function to format date as 'DD/MM/YYYY HH:MM'
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Event listeners for opening and closing the modal
addMessageBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Submit message
submitMessage.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const currentDate = new Date(); // Get the current date

  if (name && email && message) {
    const formattedDate = formatDate(currentDate); // Format the current date

    const newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.innerHTML = `
            <h4>${name} <span style="font-size: 12px; color: #777;">(${formattedDate})</span></h4>
            <p>${message}</p>
        `;

    // Append new message at the top of the messages list
    messagesDiv.appendChild(newMessage);

    // Hide the modal and clear the input fields
    modal.style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Keep only the 5 most recent messages
    const messageElements = document.querySelectorAll(".message");
    if (messageElements.length > 5) {
      messageElements[0].remove();
    }
  }
});

// Close the modal if clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

graph;

const ctx = document.getElementById("kittenGrowthChart").getContext("2d");

// Example data for kittens' growth
const data = {
  labels: ["0 weeks", "3 weeks", "6 weeks", "9 weeks", "12 weeks"], // Time points
  datasets: [
    {
      label: "Kitten 1",
      data: [0.5, 0.8, 1.2, 1.8, 2.5], // Weights in kg
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.4,
    },
    {
      label: "Kitten 2",
      data: [0.6, 0.9, 1.3, 2.0, 2.7],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.4,
    },
    {
      label: "Kitten 3",
      data: [0.4, 0.7, 1.1, 1.6, 2.3],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
    {
      label: "Kitten 4",
      data: [0.5, 0.85, 1.25, 1.7, 2.4],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      tension: 0.4,
    },
  ],
};

// Configuration for the chart
const config = {
  type: "line", // Line chart
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Kitten Growth Over Time (Weight in kg)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Weight (kg)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Age (weeks)",
        },
      },
    },
  },
};
new Chart(ctx, config);
