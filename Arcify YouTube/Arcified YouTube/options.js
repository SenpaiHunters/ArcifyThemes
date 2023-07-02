async function save_options() {
  let status = document.getElementById("status");
  status.textContent = "Saving options...";
  status.classList.remove("success", "error");

  let themeSelected = document.getElementById("themeSelector").value;

  chrome.storage.sync.set(
    {
      themeSelected: themeSelected,
    },
    function () {
      status.textContent = "Options saved.";
      status.classList.add("success");

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
      });

      setTimeout(function () {
        status.textContent = "";
      }, 750);

      console.log("Options saved:", {
        themeSelected,
      });
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  let status = document.getElementById("status");
  status.textContent = "Loading options...";
  status.classList.remove("success", "error");

  chrome.storage.sync.get(
    {
      themeSelected: "default.css",
    },
    function (items) {
      setTimeout(function () {
        status.textContent = "";
      }, 750);

      console.log("Restoring options:", items);
      document.getElementById("themeSelector").value = items.themeSelected;

      status.textContent = "Options loaded.";
      status.classList.add("success");
    }
  );
}

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);

// ↑ button for save options
//

// Settings button click activation
document
  .getElementById("settingsButton")
  .addEventListener("click", function () {
    chrome.tabs.create({ url: "settings.html" });
  });

//
// Grab the users color pref
document.addEventListener("DOMContentLoaded", function () {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Update mode toggle icon based on current theme
  function updateModeToggleIcon(prefersDarkMode) {
    const modeIcon = document.getElementById("modeIcon");
    if (prefersDarkMode) {
      modeIcon.classList.remove("fa-toggle-on");
      modeIcon.classList.add("fa-toggle-off");
    } else {
      modeIcon.classList.remove("fa-toggle-off");
      modeIcon.classList.add("fa-toggle-on");
    }
  }

  // Function to toggle theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    updateModeToggleIcon(newTheme === "dark");
  }

  // Initial setup
  document.documentElement.setAttribute(
    "data-theme",
    prefersDarkMode ? "dark" : "light"
  );
  updateModeToggleIcon(prefersDarkMode);

  // Add event listener to toggle mode when the modeToggle button is clicked
  const modeToggle = document.getElementById("modeToggle");
  modeToggle.addEventListener("click", toggleTheme);

  // Add event listener to detect changes in color scheme
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (event) {
      const newThemeAttribute = event.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newThemeAttribute);
      updateModeToggleIcon(event.matches);
    });
});

// Color settings
// Grab the user's color preference
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve user's color preference from localStorage, or use the system preference
  let prefersDarkMode = localStorage.getItem("prefersDarkMode");
  if (prefersDarkMode === null) {
    prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    localStorage.setItem("prefersDarkMode", prefersDarkMode);
  } else {
    prefersDarkMode = prefersDarkMode === "true";
  }

  const themeAttribute = prefersDarkMode ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", themeAttribute);

  // Add event listener to detect changes in color scheme
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (event) {
      const newThemeAttribute = event.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newThemeAttribute);
      localStorage.setItem("prefersDarkMode", event.matches);
    });

  // Toggle switch functionality
  const modeToggle = document.getElementById("modeToggle");
  const modeIcon = document.getElementById("modeIcon");

  modeToggle.addEventListener("click", function () {
    const isDarkMode =
      document.documentElement.getAttribute("data-theme") === "dark";

    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      modeIcon.classList.remove("fa-toggle-on");
      modeIcon.classList.add("fa-toggle-off");
      localStorage.setItem("prefersDarkMode", "false");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      modeIcon.classList.remove("fa-toggle-off");
      modeIcon.classList.add("fa-toggle-on");
      localStorage.setItem("prefersDarkMode", "true");
    }
  });

  // Theme toggle button functionality
  const themeToggle = document.getElementById("theme-toggle");
  const sunAndMoon = themeToggle.querySelector(".sun-and-moon");
  let isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";

  themeToggle.addEventListener("click", function () {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      sunAndMoon.classList.remove("moon");
      sunAndMoon.classList.add("sun");
      localStorage.setItem("prefersDarkMode", "true");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      sunAndMoon.classList.remove("sun");
      sunAndMoon.classList.add("moon");
      localStorage.setItem("prefersDarkMode", "false");
    }
  });
});
