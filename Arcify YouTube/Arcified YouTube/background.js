chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    console.log("Tab updated:", tab.url);

    const startTime = performance.now(); // Start measuring loading time

    chrome.storage.sync.get(
      [
        "themeSelected",
        "blockSubscribeButton",
        "blockSubscribeModal",
        "addLyricsButton",
        "righter",
        "roundAlbumArt",
        "rainbowControls",
        "dynamicArt",
        "hiddenSDate",
        "hiddenSNumber",
        "scrollNPB",
        "hiddenSDura",
        "hiddenSAlbum",
        "hiddenSHeart",
        "hiddenSinfo",
        "hiddenSPL",
        "hiddenPIcon",
        "hiddenSTime",
        "removeprembutton",
        "removemusixmatch",
        "spinAlbum",
        "navToggle",
        "footernomore",
        "byeappthing",
        "fontLsize",
        "hideCB",
        "removeVolBar",
        "Scrollbar",
      ],
      function (obj) {
        console.log("Storage values:", obj);
        let themeSelected = obj ? obj.themeSelected : "default.css";
        let blockSubscribeButton =
          obj && typeof obj.blockSubscribeButton === "boolean"
            ? obj.blockSubscribeButton
            : true;
        let blockSubscribeModal =
          obj && typeof obj.blockSubscribeModal === "boolean"
            ? obj.blockSubscribeModal
            : true;
        let addLyricsButton =
          obj && typeof obj.addLyricsButton === "boolean"
            ? obj.addLyricsButton
            : true;
        let navToggle =
          obj && typeof obj.navToggle === "boolean" ? obj.navToggle : true;
        let righter =
          obj && typeof obj.righter === "boolean" ? obj.righter : true;
        let roundAlbumArt =
          obj && typeof obj.roundAlbumArt === "boolean"
            ? obj.roundAlbumArt
            : true;
        let rainbowControls =
          obj && typeof obj.rainbowControls === "boolean"
            ? obj.rainbowControls
            : true;
        let dynamicArt =
          obj && typeof obj.dynamicArt === "boolean" ? obj.dynamicArt : true;
        let hiddenSDate =
          obj && typeof obj.hiddenSDate === "boolean" ? obj.hiddenSDate : false;
        let hiddenSNumber =
          obj && typeof obj.hiddenSNumber === "boolean"
            ? obj.hiddenSNumber
            : false;
        let hiddenSDura =
          obj && typeof obj.hiddenSDura === "boolean" ? obj.hiddenSDura : false;
        let hiddenSAlbum =
          obj && typeof obj.hiddenSAlbum === "boolean"
            ? obj.hiddenSAlbum
            : false;
        let hiddenSHeart =
          obj && typeof obj.hiddenSHeart === "boolean"
            ? obj.hiddenSHeart
            : false;
        let hiddenSinfo =
          obj && typeof obj.hiddenSinfo === "boolean" ? obj.hiddenSinfo : false;
        let hiddenSPL =
          obj && typeof obj.hiddenSPL === "boolean" ? obj.hiddenSPL : false;
        let hiddenPIcon =
          obj && typeof obj.hiddenPIcon === "boolean" ? obj.hiddenPIcon : false;
        let hiddenSTime =
          obj && typeof obj.hiddenSTime === "boolean" ? obj.hiddenSTime : false;
        let scrollNPB =
          obj && typeof obj.scrollNPB === "boolean" ? obj.scrollNPB : false;
        let removeprembutton =
          obj && typeof obj.removeprembutton === "boolean"
            ? obj.removeprembutton
            : false;
        let removemusixmatch =
          obj && typeof obj.removemusixmatch === "boolean"
            ? obj.removemusixmatch
            : true;
        let spinAlbum =
          obj && typeof obj.spinAlbum === "boolean" ? obj.spinAlbum : true;
        let footernomore =
          obj && typeof obj.footernomore === "boolean"
            ? obj.footernomore
            : true;
        let byeappthing =
          obj && typeof obj.byeappthing === "boolean" ? obj.byeappthing : true;
        let fontLsize =
          obj && typeof obj.fontLsize === "boolean" ? obj.fontLsize : true;
        let hideCB =
          obj && typeof obj.hideCB === "boolean" ? obj.hideCB : false;
        let removeVolBar =
          obj && typeof obj.removeVolBar === "boolean"
            ? obj.removeVolBar
            : false;
        let scrollbar =
          obj && typeof obj.Scrollbar === "boolean" ? obj.Scrollbar : false;

        if (blockSubscribeButton) {
          console.log("Inserting blockSubscribeButton.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/blockSubscribeButton.css`],
          });
        }

        if (scrollNPB) {
          console.log("Inserting scrollNPB.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/scrollNPB.css`],
          });
        }

        if (blockSubscribeModal) {
          console.log("Inserting blockSubscribeModal.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/blockSubscribeModal.css`],
          });
        }

        if (righter) {
          console.log("Inserting righter.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/righter.css`],
          });
        }

        if (fontLsize) {
          console.log("Inserting fontLsize.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/fontLsize.css`],
          });
        }

        if (hideCB) {
          console.log("Inserting hideCB.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/hideCB.css`],
          });
        }

        if (footernomore) {
          console.log("Inserting footernomore.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/footernomore.css`],
          });
        }

        if (byeappthing) {
          console.log("Inserting byeappthing.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/byeappthing.css`],
          });
        }

        if (spinAlbum) {
          console.log("Inserting spinAlbum.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/spinAlbum.css`],
          });
        }

        if (removeVolBar) {
          console.log("Inserting removeVolBar.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/removeVolBar.css`],
          });
        }

        if (roundAlbumArt) {
          console.log("Inserting roundAlbumArt.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/roundAlbumArt.css`],
          });
        }

        if (removeprembutton) {
          console.log("Inserting removeprembutton.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/removeprembutton.css`],
          });
        }

        if (dynamicArt) {
          console.log("Inserting dynamicArt.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/dynamicArt.css`],
          });
        }

        if (addLyricsButton) {
          console.log("Executing addLyrics.js");
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["/options/addLyrics.js"],
          });
        }

        if (navToggle) {
          console.log("Executing navToggle.js");
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["/options/navToggle.js"],
          });
        }

        if (hiddenSDate) {
          console.log("Inserting hiddenSDate.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenSDate.css"],
          });
        }

        if (removemusixmatch) {
          console.log("Inserting removemusixmatch.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/removemusixmatch.css"],
          });
        }

        if (hiddenSTime) {
          console.log("Inserting hiddenSTime.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenSTime.css"],
          });
        }

        if (hiddenSNumber) {
          console.log("Inserting hiddenSNumber.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenSNumber.css"],
          });
        }

        if (hiddenSDura) {
          console.log("Inserting hiddenSDura.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenSDura.css"],
          });
        }

        if (hiddenSAlbum) {
          console.log("Inserting hiddenSAlbum.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenSAlbum.css"],
          });
        }

        if (hiddenSHeart) {
          console.log("Inserting hiddenSHeart.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenSHeart.css"],
          });
        }

        if (hiddenSinfo) {
          console.log("Inserting hiddenSinfo.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenSinfo.css"],
          });
        }

        if (hiddenSPL) {
          console.log("Inserting hiddenSPL.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenSPL.css"],
          });
        }

        if (hiddenPIcon) {
          console.log("Inserting hiddenPIcon.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./options/hiddenPIcon.css"],
          });
        }

        if (rainbowControls) {
          console.log("Inserting rainbowControls.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/rainbowControls.css`],
          });
        }

        if (scrollbar) {
          console.log("Inserting Scrollbar.css");
          chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: [`./options/Scrollbar.css`],
          });
        }

        console.log("Inserting themeSelected:", themeSelected);
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          files: [`./themes/${themeSelected}`],
        });

        const endTime = performance.now(); // Stop measuring loading time
        const loadingTime = endTime - startTime;
        console.log("Script loading time:", loadingTime, "ms");
      }
    );
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const url = changeInfo.url || tab.url;
  if (url && url.includes("https://www.youtube.com/*")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    });
  }
});
