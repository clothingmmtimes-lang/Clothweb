// Worker endpoint for home content
const HOME_API = "https://mycloth-worker.mmtimes2023.workers.dev/home";

// Load homepage content from Sheets (via Worker)
async function loadHomeContent() {
  try {
    const res = await fetch(HOME_API);
    const data = await res.json();

    console.log("Home data loaded:", data);

    // Apply data to website
    if (data.home_title) {
      document.getElementById("home_title").innerText = data.home_title;
    }

    document.getElementById("home_subtitle").innerText = data.home_subtitle;
    document.querySelector(".hero-btn").innerText = data.hero_button;

    document.getElementById("footer_text").innerText = data.footer_text;

  } catch (error) {
    console.error("Error loading home content:", error);
  }
}

// Call function on page load
loadHomeContent();
