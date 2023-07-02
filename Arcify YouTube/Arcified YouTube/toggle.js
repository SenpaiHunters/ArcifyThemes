// Toggle script
window.onload = function () {
  const onoff = document.getElementById("toggle_button");
  let isEnabled = true;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log("Tabs query result:", tabs);
    chrome.tabs.sendMessage(
      tabs[0].id,
      { txt: "check", bool: "" },
      function (response) {
        console.log("Response from content script:", response);
        if (response === undefined || response.status === undefined) {
          console.log("Content script response undefined");
        } else {
          isEnabled = response.status === 1;
          onoff.checked = isEnabled;
          console.log(isEnabled ? "Enabled" : "Disabled");
        }
      }
    );
  });

  onoff.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log("Tabs query result:", tabs);
      const boolValue = !isEnabled;
      const toggleText = boolValue ? "enable" : "disable";
      console.log(`Sending ${toggleText}`);
      chrome.tabs.sendMessage(
        tabs[0].id,
        { txt: toggleText, bool: boolValue.toString() },
        function (response) {
          console.log("Response from content script:", response);
          if (response !== undefined && response.status !== undefined) {
            console.log("Content script response:", response.status);
          }
        }
      );
      isEnabled = boolValue;
      onoff.checked = boolValue;
    });
  });
};
